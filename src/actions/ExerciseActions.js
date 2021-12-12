export function fetchWorkouts(){
    return dispatch =>
    fetch("http://localhost:3000/exercises")
    .then(r=> r.json())
    .then(notes => dispatch({type: "SET_EXERCISES", payload: notes}))
}