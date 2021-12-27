import { useSelector } from "react-redux"
import { useState } from "react";

export default function ExerciseList() {
    const [target, setTarget] = useState("All");

const exercises = useSelector(state => state.exercises)

const exerciseTarget = exercises.filter(exercise => target === "All" || exercise.target.startsWith(target) )
    return (
        <div>
        <select onChange={e => setTarget( e.target.value)}>

        <option value="All">All</option>
            <option value="Chest">Chest</option>
            <option value="Triceps">Triceps</option>
            <option value="Quads">Quads</option>
            <option value="Calves">Calves</option>
        </select>
            <h2>Exercises</h2>
            <ul className="list">
                {exerciseTarget.map(n => 
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