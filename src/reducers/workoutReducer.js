import { SET_WORKOUT, ADD_WORKOUT, DELETE_WORKOUT } from "../actions/constants";

export default function workoutReducer(state = [], action){
    switch (action.type) {
        case SET_WORKOUT:
            return action.payload

        case ADD_WORKOUT:
            return [...state, action.payload];

        case DELETE_WORKOUT:
            return state.filter(workout => workout.id !== action.payload)


        default: 
        return state
    }
}