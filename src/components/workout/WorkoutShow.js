import { useParams } from "react-router"
import { Link } from "react-router-dom"
import DeleteExercise from "../exercise/DeleteExercise"
import { useSelector } from "react-redux"
import DeleteWorkout from "./DeleteWorkout"

export default function WorkoutShow() {
    const { id } = useParams()
    const workouts = useSelector(state => state.workouts)
    let workout = workouts.filter(workout => workout.id == id)[0]
    const exercises = useSelector(state => state.exercises)
    let exerciseList = exercises.filter(exercise => exercise.workout.id == id)

    return (
    <div class="showWorkout">
        <h2>{workout.title}</h2> 
        <p>Focus: {workout.focus}</p> <DeleteWorkout workoutId={workout.id} /><br></br>
        <Link className="link" id="createExerciseLink" to={`exercises/new`}>Create New Exercise For This Workout</Link>
        <h3>Exercises:</h3>
        <ul className="exerciseList">
                {exerciseList.map(e => 
                <li key={e.id}>
                <div id={`exercise-${e.id}`}>
                <h4>{e.name}</h4> 
                <p>Target Area: {e.target}</p>
                <p>Sets: {e.sets}</p>
                <p>Reps: {e.reps}</p>
                <DeleteExercise exerciseId={e.id} />
                </div>
                <br></br>
                </li>)}
            </ul>
            
            
    </div>
    
)
}
