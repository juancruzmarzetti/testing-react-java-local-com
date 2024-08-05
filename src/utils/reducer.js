export const reducer = (state, action) => {
    switch(action.type){
        case "GET_ODONTOLOGOS":
            return { ...state, data: action.payload}
        default:
            return state
    }
}