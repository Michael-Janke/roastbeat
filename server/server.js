const WebSocket = require('ws');
import Player from './player'
import Game from './game'

const wss = new WebSocket.Server({ port: 8080 });

let games = {};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
  	console.log(message);
    try {
    	let messageObject = JSON.parse(message);
	
	    switch(messageObject.command) {
	    	case "CREATE_GAME": createGame(ws); break;
	    	case "JOIN_GAME": joinGame(ws, messageObject.name, messageObject.pin); break;
	    	case "START_GAME": startGame(ws); break;
	    	case "STOP_GAME": stopGame(ws); break;
	    	case "LEAVE_GAME": leaveGame(ws); break;
	    	default:
	    		throw(messageObject.command + " command not defined");
	    }
  	} catch (e) {
  		ws.send(JSON.stringify({
	    	command: "ERROR",
	    	error: e.message
	    }));
  	}
  });
});

//{"command":"CREATE_GAME"}
function createGame(client) {
	let game = new Game();
    client.send(JSON.stringify({
    	command: "READ_PIN",
    	pin: game.pin
    }));
  	games[game.pin] = game;
  	console.log("your pin is:" + game.pin);
}

/*
{"command":"CREATE_GAME"}
{"command":"JOIN_GAME", "pin": 0, "name": "Michael"}
*/
function joinGame(client, name, pin) {
	let game = games[pin];
	let player = new Player(name, game, client);
	game.players.push(player);

	broadcastGameState(game);

  	console.log(name + " joined " + pin);
}

function broadcastGameState(game) {
	game.players.forEach(
		(player) => player.socket.send(JSON.stringify({
			"command" : "READ_GAME_STATE",
			"player" : game.players.map((player) => {return 
				{"name": player.name, 
				"score": player.score};
			}),
			"state" : game.state,
			"question" : game.question,
		}))
	)
}

