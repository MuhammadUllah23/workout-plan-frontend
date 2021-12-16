export function fetchWorkouts(){
    return dispatch =>
    fetch("http://localhost:3000/workouts")
    .then(r=> r.json())
    .then(workouts => dispatch({type: "SET_WORKOUT", payload: workouts}))
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
            dispatch({type: "ADD_WORKOUT", payload: workout})
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
            dispatch({ type: "DELETE_WORKOUT", payload: workout.id });
            
        })
    };
}

