export function fetchWorkouts(){
    return dispatch =>
    fetch("http://localhost:3000/workouts")
    .then(r=> r.json())
    .then(notes => dispatch({type: "SET_WORKOUT", payload: notes}))
}

export function createWorkout(workout){
    return dispatch => {
        fetch("http://localhost:3000/workouts/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(workout)
        })
        .then(r => r.json())
        .then(workout => dispatch({type: "ADD_WORKOUT", payload: workout}))
    }
}