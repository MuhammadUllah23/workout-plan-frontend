
export default function exerciseReducer(state = [], action){
    switch (action.type) {
        case "SET_EXERCISES":
            return action.payload

        default: 
        return state
    }
}