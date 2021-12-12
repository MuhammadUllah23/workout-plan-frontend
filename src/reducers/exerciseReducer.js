
export default function exerciseReducer(state = [], action){
    switch (action.type) {
        case "SET_EXERCISES":
            return action.payload

            case "ADD_EXERCISE":
                return [...state, action.payload];

        default: 
        return state
    }
}