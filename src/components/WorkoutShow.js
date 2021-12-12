import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ExerciseForm from "./ExerciseForm"
import DeleteExercise from "./DeleteExercise"

export default function WorkoutShow({workouts}) {
    const { id } = useParams()
    let workout = workouts.filter(workout => workout.id == id)[0]

    function handleClick(e) {
        if(e.target.innerText === "Create Exercise"){
            // console.log("edit")
            return (
                <ExerciseForm />
            )
            
        } else if(e.target.innerText === "Delete Exercise"){
            console.log("delete")
        }
    }
    return (
    <div class="show-workout">
        <h2>{workout.title}</h2>
        <p>Focus: {workout.focus}</p>
        <Link to="/exercises/new" state={{workoutId: `${workout.id}`}}>Create New Exercise For This Workout</Link>
        <h3>Exercises:</h3>
        <ul>
                {workout.exercises.map(n => 
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
