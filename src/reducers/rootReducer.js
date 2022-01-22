import { combineReducers } from "redux";
import workoutReducer from "./workoutReducer";
import exerciseReducer from "./exerciseReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    workouts: workoutReducer,
    exercises: exerciseReducer,
    users: userReducer
})