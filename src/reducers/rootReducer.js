import { combineReducers } from "redux";
import workoutReducer from "./workoutReducer";
import exerciseReducer from "./exerciseReducer";

export const rootReducer = combineReducers({
    workouts: workoutReducer,
    exercises: exerciseReducer
})