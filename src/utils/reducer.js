export const reducer = (state, action) => {
    switch(action.type){
        case "GET_ODONTOLOGOS":
            return action.payload
        default:
            return state
    }
}