export default function ExerciseList({exercises}) {
    return (
        <div>
            <h2>Exercises</h2>
            <ul>
                {exercises.map(n => 
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