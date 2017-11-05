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
	    	case "CREATE_GAME": createGame(ws);
	    	break;
	    	default:
	    		console.log(messageObject.command + " command not defined")
	    }
  	} catch (e) {
  		ws.send(JSON.stringify({
	    	command: "ERROR",
	    	error: e.message
	    }));
  	}
  });
});

function createGame(client) {
	let game = new Game();
    client.send(JSON.stringify({
    	command: "READ_PIN",
    	pin: game.pin
    }));
  	games[game.pin] = game;
  	console.log("your pin is:" + game.pin);
}

//{"command":"CREATE_GAME"}