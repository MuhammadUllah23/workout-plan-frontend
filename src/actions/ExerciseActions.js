export function fetchExercises(){
    return dispatch =>
    fetch("http://localhost:3000/exercises")
    .then(r=> r.json())
    .then(notes => dispatch({type: "SET_EXERCISES", payload: notes}))
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
            dispatch({type: "ADD_EXERCISE", payload: exercise})
            navigate("/workouts")
        })
    }
}

export function deleteExercise(exerciseId, navigate){
    return (dispatch) => {
        fetch(`http://localhost:3000/exercises/${exerciseId}`, {
          method: "DELETE",
        })
        .then( r => r.json())
        .then(exerciseId => {
            dispatch({ type: "DELETE_EXERCISE", payload: exerciseId });
            navigate("/workouts")
        })
    };
}