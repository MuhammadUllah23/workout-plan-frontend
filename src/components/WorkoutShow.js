import { useParams } from "react-router"

export default function WorkoutShow({workouts}) {
    const { id } = useParams()
    let workout = workouts.filter(workout => workout.id == id)[0]
return (
    <p>hi</p>
)
}

// const WorkoutShow = ({workouts}) => {
    // debugger
    // let workout = workouts.filter(workout => workout.id == params.id)
//     return (
//         <h1>hello world</h1>
//     )
// }

// export default WorkoutShow