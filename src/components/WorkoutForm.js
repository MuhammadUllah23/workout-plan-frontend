 import React from "react";
 import { useDispatch } from "react-redux";
 import { createWorkout } from "../actions/WorkoutActions";

 export default function WorkoutForm() {
    state = {
        title: '',
        focus: ''
      }
     
     const dispatch = useDispatch()

     handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

     function handleSubmit(e){
        e.preventDefault()
        dispatch(createWorkout({workout: workout}))
     }

     return (
         <form onSubmit={handleSubmit}>
         <h2>Create Workout</h2>
            <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="title"
            value={this.state.title}
            placeholder="Title" />

            <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="focus"
            value={this.state.focus}
            placeholder="Focus" />
            
            <input type="submit" />
         </form>  
             
         
     )
 }