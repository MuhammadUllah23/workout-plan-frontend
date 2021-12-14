export default function exerciseReducer(state = [], action){
    switch (action.type) {
        case "SET_EXERCISES":
            return action.payload

        case "ADD_EXERCISE":
            return [...state, action.payload];
                
        case "DELETE_EXERCISE":
            return state.filter(exercise => exercise.id !== action.payload)

        default: 
        return state
    }
}