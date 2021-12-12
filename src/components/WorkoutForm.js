 import { useState } from "react";
 import { useDispatch } from "react-redux";

 export default function WorkoutForm() {
     const [workout, setWorkout] = useState("")
     const dispatch = useDispatch()

     
     return (
         <form>
         <h2>Create Workout</h2>
            <input
            type="text"
            onChange={e => setWorkout(e.target.value)}
            name="title"
            value={workout.title}
            placeholder="Title" />

            <input
            type="text"
            onChange={e => setWorkout(e.target.value)}
            name="focus"
            value={workout.focus}
            placeholder="Focus" />
            
            <input type="submit" />
         </form>  
             
         
     )
 }