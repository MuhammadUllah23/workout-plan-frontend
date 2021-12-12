export default function workoutReducer(state = [], action){
    switch (action.type) {
        case "SET_WORKOUT":
            return action.payload

        case "ADD_WORKOUT":
            return [...state, action.payload];

        default: 
        return state
    }
}