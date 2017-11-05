const roastbeefReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_GAME_STATE':
      return {
        ...state,
        
            ws: action.ws
        
      }
    default:
      return state
  }
}
export default roastbeefReducer