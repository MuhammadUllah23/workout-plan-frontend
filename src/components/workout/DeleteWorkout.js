import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteWorkout } from "../../actions/WorkoutActions"

export default function DeleteWorkout({workoutId}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleDelete(e){
        dispatch(deleteWorkout(e, navigate))
    }
    return(
        <button className="deleteButton" onClick={() => handleDelete(workoutId)}>Delete Workout</button>
    )
}