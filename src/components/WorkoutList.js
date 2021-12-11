import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function WorkoutList() {
    const workouts = useSelector(state => state.workouts)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Workouts</h2>
        </div>
    )
}