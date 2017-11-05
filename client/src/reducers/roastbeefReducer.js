const roastbeefReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_WS':
      return {
        ...state,
        
            ws: action.ws
        
      };
      case 'SET_PIN':
      return {
        ...state,
        
            pin: action.pin
        
      };
    default:
      return state
  }
};
export default roastbeefReducer