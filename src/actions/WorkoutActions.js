import { SET_WORKOUT, ADD_WORKOUT, DELETE_WORKOUT } from "./constants"

export function fetchWorkouts(){
    return dispatch =>{
        console.log("c")
    fetch("http://localhost:3000/workouts")
    .then(r=> r.json())
    .then(workouts => {
        console.log("e")
        dispatch({type: SET_WORKOUT, payload: workouts}
            )})
}
console.log("d")
}

export function createWorkout(workout, navigate){
    return dispatch => {
        
        fetch("http://localhost:3000/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(workout)
        })
        .then(r => r.json())
        .then(workout => {
           
            dispatch({type: ADD_WORKOUT, payload: workout})
            navigate(`/workouts`)
        })
    }
    
}

export function deleteWorkout(workoutId, navigate){
    return (dispatch) => {
        fetch(`http://localhost:3000/workouts/${workoutId}`, {
          method: "DELETE",
        })
        .then( r => r.json())
        .then(workout => {
            navigate("/workouts")
            dispatch({ type: DELETE_WORKOUT, payload: workout.id });
            
        })
    };
}

