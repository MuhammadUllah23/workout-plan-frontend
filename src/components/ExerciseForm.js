import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router";
import { createExercise } from "../actions/ExerciseActions";


export default function ExerciseForm({}) {
    const location = useLocation()
    const { workoutId } = location.state
    
    const [exercise, setExercise] = useState({
        name: "",
        target: "",
        sets: "",
        reps: "",
        workout_id: workoutId
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(e){
       e.preventDefault()
       
       dispatch(createExercise({exercise}, navigate))
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Create Workout</h2>
           <input
           type="text"
           onChange={e => setExercise({...exercise, name: e.target.value})}
           name="name"
           id="name"
           value={exercise.name}
           placeholder="Exercise Name" />

           <input
           type="text"
           onChange={e => setExercise({...exercise, target: e.target.value})}
           name="target"
           id="target"
           value={exercise.target}
           placeholder="Target Areas" />

           <input
           type="number"
           min='1'
           onChange={e => setExercise({...exercise, sets: e.target.value})}
           name="sets"
           id="sets"
           value={exercise.sets}
           placeholder="Sets" />

           <input
           type="number"
           min='1'
           onChange={e => setExercise({...exercise, reps: e.target.value})}
           name="reps"
           id="reps"
           value={exercise.reps}
           placeholder="Reps" />
           
           <input type="submit" />
        </form>  
        
    )

}