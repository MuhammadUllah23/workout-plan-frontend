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
            <ul>
                {workouts.map(n => 
                <li key={n.id}>
                <h4>{n.title}</h4> 
                <p>Focus: {n.focus}</p>
                <br></br>
                </li>)}
            </ul>
        </div>
    )
}