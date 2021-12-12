import { deleteExercise } from "../actions/ExerciseActions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";

export default function DeleteExercise({exercise}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleDelete(e){
        dispatch(deleteExercise(e, navigate))
    }
    return(
        <button onClick={() => handleDelete(exercise.id)}>Delete</button>
    )
}