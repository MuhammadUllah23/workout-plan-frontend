import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { createExercise } from "../../actions/ExerciseActions";
import { useParams } from "react-router"


export default function ExerciseForm() {

    const { id } = useParams()
  
    
    const [exercise, setExercise] = useState({
        name: "",
        target: "",
        sets: "",
        reps: "",
        workout_id: id
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(e){
       e.preventDefault()
       
       dispatch(createExercise({exercise}, navigate))
    }

    return (
        <div>
        <h2>Create Exercise</h2>
        <form className="form" onSubmit={handleSubmit}>
        
           <input
           type="text"
           onChange={e => setExercise({...exercise, name: e.target.value})}
           name="name"
           id="name"
           value={exercise.name}
           placeholder="Exercise Name" />
            <br />
           <input
           type="text"
           onChange={e => setExercise({...exercise, target: e.target.value})}
           name="target"
           id="target"
           value={exercise.target}
           placeholder="Target Areas" />
            <br />
           <input
           type="number"
           min='1'
           onChange={e => setExercise({...exercise, sets: e.target.value})}
           name="sets"
           id="sets"
           value={exercise.sets}
           placeholder="Sets" />
            <br />
           <input
           type="number"
           min='1'
           onChange={e => setExercise({...exercise, reps: e.target.value})}
           name="reps"
           id="reps"
           value={exercise.reps}
           placeholder="Reps" />
            <br />        
           <input className="submitInput" type="submit" />
        </form>  
        </div>
    )

}