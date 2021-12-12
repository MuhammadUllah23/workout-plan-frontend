import { useParams } from "react-router"

export default function WorkoutShow({workouts}) {
    const { id } = useParams()
    let workout = workouts.filter(workout => workout.id == id)[0]
    debugger
    return (
    <div class="show-workout">
        <h2>{workout.title}</h2>
        <p>Focus: {workout.focus}</p>
        <h3>Exercises:</h3>
        <ul>
                {workout.exercises.map(n => 
                <li key={n.id}>
                <h4>{n.name}</h4> 
                <p>Target Area: {n.target}</p>
                <p>Sets: {n.sets}</p>
                <p>Reps: {n.reps}</p>
                <br></br>
                </li>)}
            </ul>
    </div>
    
)
}
