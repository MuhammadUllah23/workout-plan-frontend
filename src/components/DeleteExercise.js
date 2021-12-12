import { deleteExercise } from "../actions/ExerciseActions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";

export default function DeleteExercise({exercise}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleDelete(e){
        dispatch(deleteExercise(exercise.id), navigate)
    }
    return(
        <button onClick={handleDelete(exercise)}>Delete</button>
    )
}