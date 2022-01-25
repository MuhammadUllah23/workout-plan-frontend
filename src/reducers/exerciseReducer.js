import { SET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, UPDATE_EXERCISE } from "../actions/constants";

export default function exerciseReducer(state = [], action){
    switch (action.type) {
        case SET_EXERCISES:
            return action.payload

        case ADD_EXERCISE:
            return [...state, action.payload];
        
        case UPDATE_EXERCISE:
            const newStateArray = state.filter((exercise) => exercise !== action.payload)
            return [...newStateArray, action.paylaod];
                
        case DELETE_EXERCISE:
            return state.filter(exercise => exercise.id !== action.payload)

        default: 
        return state
    }
}