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
        players: action.data.player,
        state: action.data.state,
        question: JSON.stringify(action.data)
      }; break;
      case 'SET_ANSWER':
      return {
        ...state,
        question: action.data.question,
        answer: action.data.answer,
        lastPlayer: action.data.player
      }; break;
    default:
      return state
  }
};
export default roastbeefReducer