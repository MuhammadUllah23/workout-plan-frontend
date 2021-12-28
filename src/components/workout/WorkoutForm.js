 import { useState } from "react";
 import { useDispatch } from "react-redux";
 import { createWorkout } from "../../actions/WorkoutActions";
 import { useNavigate } from "react-router";
 

 export default function WorkoutForm() {
     const [workout, setWorkout] = useState({
         title: "",
         focus: ""
     })

     const navigate = useNavigate()
     const dispatch = useDispatch()

     function handleSubmit(e){
        e.preventDefault()
        
        dispatch(createWorkout({workout}, navigate))
     }

     return (
         <form className="form" onSubmit={handleSubmit}>
         <h2>Create Workout</h2>
            <input
            type="text"
            onChange={e => setWorkout({...workout, title: e.target.value})}
            name="title"
            id="title"
            value={workout.title}
            placeholder="Title" />
            <br />
            <input
            type="text"
            onChange={e => setWorkout({...workout, focus: e.target.value})}
            name="focus"
            id="focus"
            value={workout.focus}
            placeholder="Focus" />
            <br />
            <input className="submitInput" type="submit" />
         </form>  
         
     )
 }