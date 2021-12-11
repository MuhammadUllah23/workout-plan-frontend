import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkouts } from "../actions/WorkoutActions";

export default function WorkoutList() {
    const workouts = useSelector(state => state.workouts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWorkouts())
    }, [])
    return (
        <div>
            <h2>Workouts</h2>
        </div>
    )
}