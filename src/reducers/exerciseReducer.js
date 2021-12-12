
export default function exerciseReducer(state = [], action){
    switch (action.type) {
        case "SET_WORKOUT":
            return action.payload
            
        default: 
        return state
    }
}