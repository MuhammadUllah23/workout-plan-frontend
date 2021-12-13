import { deleteExercise } from "../actions/ExerciseActions"
import { useDispatch } from "react-redux"


export default function DeleteExercise({exercise}) {
    const dispatch = useDispatch()

    function handleDelete(e){
        dispatch(deleteExercise(e))
    }
    return(
        <button onClick={() => handleDelete(exercise.id)}>Delete</button>
    )
}