import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteWorkout } from "../actions/WorkoutActions"

export default function DeleteWorkout({workout}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleDelete(e){
        dispatch(deleteWorkout(e, navigate))
    }
    return(
        <button onClick={() => handleDelete(workout.id)}>Delete Workout</button>
    )
}