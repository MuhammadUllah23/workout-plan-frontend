export default function workoutReducer(state = [], action){
    switch (action.type) {
        case "SET_WORKOUT":
            return action.payload

            case "ADD_NOTE":
                return [...state, action.payload];
                
        default: 
        return state
    }
}