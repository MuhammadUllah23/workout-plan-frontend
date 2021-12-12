 import { useState } from "react";
 import { useDispatch } from "react-redux";
 import { createWorkout } from "../actions/WorkoutActions";

 export default function WorkoutForm() {
     const [workout, setWorkout] = useState({
         title: "",
         focus: ""
     })


     const dispatch = useDispatch()

     function handleSubmit(e){
        e.preventDefault()
        
        dispatch(createWorkout({workout}))
     }

     return (
         <form onSubmit={handleSubmit}>
         <h2>Create Workout</h2>
            <input
            type="text"
            onChange={e => setWorkout({...workout, title: e.target.value})}
            name="title"
            id="title"
            value={workout.title}
            placeholder="Title" />

            <input
            type="text"
            onChange={e => setWorkout({...workout, focus: e.target.value})}
            name="focus"
            id="focus"
            value={workout.focus}
            placeholder="Focus" />
            
            <input type="submit" />
         </form>  
             
         
     )
 }