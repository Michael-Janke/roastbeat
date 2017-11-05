const roastbeefReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_WS':
      return {
        ...state,
        
            ws: action.ws
        
      }
    default:
      return state
  }
}
export default roastbeefReducer