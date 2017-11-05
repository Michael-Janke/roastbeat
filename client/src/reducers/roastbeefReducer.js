const roastbeefReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_WS':
      return {
        ...state,
        ws: action.ws
      }; break;
      case 'SET_PIN':
      return {
        ...state,
        pin: action.pin
      }; break;
      case 'SET_GAME_STATE':
      return {
        ...state,
        players: action.player,
        state: action.state,
        question: action.question
      }; break;
      case 'SET_ANSWER':
      return {
        ...state,
        question: action.question,
        answer: action.answer,
        lastPlayer: action.player
      }; break;
    default:
      return state
  }
};
export default roastbeefReducer