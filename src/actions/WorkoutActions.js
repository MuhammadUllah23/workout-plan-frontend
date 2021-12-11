export function fetchWorkouts(){
    return dispatch =>
    fetch("http://localhost:3000/workouts")
    .then(r=> r.json())
    .then(notes => dispatch({type: "SET_WORKOUT", payload: notes}))
}