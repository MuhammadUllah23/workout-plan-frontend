import { useSelector } from "react-redux"


export default function ExerciseList() {
    
const allExercises = useSelector(state => state.exercises)

    return (
        <div>
            <h2>Exercises</h2>
            <ul className="exerciseList">
                {allExercises.map(n => 
                <li key={n.id}>
                <h4>{n.name}</h4> 
                <p>Target Areas: {n.target}</p>
                <p>Sets: {n.sets}</p>
                <p>Reps: {n.reps}</p>
                <br></br>
                </li>)}
            </ul>
        </div>
    )

}