export default function UpdateExercise(exercise) {
  

    function createUpdateForm(e) {
        const exerciseCont = document.getElementById(`exercise-${e.id}`)
        console.log(exerciseCont)
        
    }
    // debugger

    return (
        <button onClick={(e) => createUpdateForm(e)}>Edit Exercise</button>
    )
}