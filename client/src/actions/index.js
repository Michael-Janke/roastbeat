export const setWS = ws => {
    return {
        type: "SET_WS",
        ws
    }
};

export const setPin = pin => {
    return {
        type: "SET_PIN",
        pin
    }
};

export const setGameState = data => {
    return {
        type: "SET_GAME_STATE",
        data
    }
};

export const setAnswer = data => {
    return {
        type: "SET_ANSWER",
        data
    }
};
