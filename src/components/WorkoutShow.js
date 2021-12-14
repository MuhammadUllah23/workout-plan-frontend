import { useParams } from "react-router"
import { Link } from "react-router-dom"
import DeleteExercise from "./DeleteExercise"
import { useSelector } from "react-redux"

export default function WorkoutShow() {
    const { id } = useParams()
    const workouts = useSelector(state => state.workouts)
    let workout = workouts.filter(workout => workout.id == id)[0]
    const exercises = useSelector(state => state.exercises)
    let exerciseList = exercises.filter(exercise => exercise.workout.id == id)
    
    return (
    <div class="show-workout">
        <h2>{workout.title}</h2>
        <p>Focus: {workout.focus}</p>
        <Link to="/exercises/new" state={{workoutId: `${workout.id}`}}>Create New Exercise For This Workout</Link>
        <h3>Exercises:</h3>
        <ul>
                {exerciseList.map(n => 
                <li key={n.id}>
                <div id={`exercise-${n.id}`}>
                <h4>{n.name}</h4> 
                <p>Target Area: {n.target}</p>
                <p>Sets: {n.sets}</p>
                <p>Reps: {n.reps}</p>
                <DeleteExercise exercise={n}/>
                </div>
                <br></br>
                </li>)}
            </ul>
            
            
    </div>
    
)
}
