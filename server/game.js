var lastPin = 0;
function generatePin() {
	return lastPin++;
}

class Game {
    constructor() {
        this.players = [];
        this.pin = generatePin();
        this.state = "LOBBY";
    }
}

export default Game;