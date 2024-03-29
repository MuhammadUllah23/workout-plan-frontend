import { SET_WORKOUT, ADD_WORKOUT, DELETE_WORKOUT, UPDATE_WORKOUT } from "./constants"

export function fetchWorkouts(){
    return dispatch =>{
    fetch("http://localhost:3000/workouts")
    .then(r=> r.json())
    .then(workouts => {
        console.log("e")
        dispatch({type: SET_WORKOUT, payload: workouts}
            )})
}
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
            if (workout.message) {
                alert(workout.message)
            } else{
                dispatch({type: ADD_WORKOUT, payload: workout})
                navigate(`/workout/${workout.id}`)   
            }
    
        })
    }
    
}

export function updateWorkout(workout, navigate){
    return dispatch => {
        fetch(`http://localhost:3000/workouts/${workout.id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer <token>`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(workout)
        })
        .then(r => r.json())
        .then(workout => {
            if (workout.message) {
                alert(workout.message)
            } else{
                dispatch({type: UPDATE_WORKOUT, payload: workout})
                navigate(`/workout/${workout.id}`)
            }
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

