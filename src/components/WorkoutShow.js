import { useParams } from "react-router"
import EditExercise from "./EditExercise"

export default function WorkoutShow({workouts}) {
    const { id } = useParams()
    let workout = workouts.filter(workout => workout.id == id)[0]

    function handleClick(e) {
        if(e.target.innerText === "Edit Exercise"){
            // console.log("edit")
            let exerciseId = document.getElementById(`exercise-${id}`)
            {<EditExercise exercise={exerciseId}/>}
        } else if(e.target.innerText === "Delete Exercise"){
            console.log("delete")
        }
    }
    return (
    <div class="show-workout">
        <h2>{workout.title}</h2>
        <p>Focus: {workout.focus}</p>
        <h3>Exercises:</h3>
        <ul>
                {workout.exercises.map(n => 
                <li key={n.id}>
                <div id={`exercise-${n.id}`}>
                <h4>{n.name}</h4> 
                <p>Target Area: {n.target}</p>
                <p>Sets: {n.sets}</p>
                <p>Reps: {n.reps}</p>
                <button onClick={handleClick}>Edit Exercise</button><button onClick={handleClick}>Delete Exercise</button>
                </div>
                <br></br>
                </li>)}
            </ul>
    </div>
    
)
}
