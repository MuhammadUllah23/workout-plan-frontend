import { SET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, UPDATE_EXERCISE } from "./constants"

export function fetchExercises(){
    return dispatch =>
    fetch("http://localhost:3000/exercises")
    .then(r=> r.json())
    .then(exercises => dispatch({type: SET_EXERCISES, payload: exercises}))
}

export function createExercise(exercise, navigate){
    return dispatch => {
        fetch("http://localhost:3000/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(exercise)
        })
        .then(r => r.json())
        .then(exercise => {
            dispatch({type: ADD_EXERCISE, payload: exercise})
            navigate(`/workout/${exercise.workout.id}`)
        })
    }
}

export function deleteExercise(exerciseId){
    return (dispatch) => {
        fetch(`http://localhost:3000/exercises/${exerciseId}`, {
          method: "DELETE",
        })
        .then( r => r.json())
        .then(exercise => {
            dispatch({ type: DELETE_EXERCISE, payload: exercise.id });
            
        })
    };
}

