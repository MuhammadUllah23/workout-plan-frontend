 import { useState } from "react";

 export default function WorkoutForm() {
     const [workout, setWorkout] = useState("")
     
     return (
         <form>
             <h2>Create Workout</h2>
             <input type="submit" />
         </form>
     )
 }