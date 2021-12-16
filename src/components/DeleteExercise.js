import { deleteExercise } from "../actions/ExerciseActions"
import { useDispatch } from "react-redux"


export default function DeleteExercise({exerciseId}) {
    const dispatch = useDispatch()

    function handleDelete(e){
        dispatch(deleteExercise(e))
    }
    return(
        <button onClick={() => handleDelete(exerciseId)}>Delete</button>
    )
}