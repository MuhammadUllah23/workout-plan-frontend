 import React from "react";
 import { useDispatch } from "react-redux";
 import { createWorkout } from "../actions/WorkoutActions";

 export default function WorkoutForm() {
    state = {
        title: '',
        focus: ''
      }
     
     const dispatch = useDispatch()

     function handleSubmit(e){
        e.preventDefault()
        debugger
        dispatch(createWorkout({workout: workout}))
     }

     return (
         <form onSubmit={handleSubmit}>
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