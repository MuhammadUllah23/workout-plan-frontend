import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function WorkoutList() {
const workouts = useSelector(state => state.workouts)

    return (
        <div>
            <h2>Workouts</h2>
            <ul className='list'>
                {workouts.map(n => 
                <li key={n.id}>
                <h4>{n.title}</h4> 
                <p>Focus: {n.focus}</p>
                    <p><Link to={`/workout/${n.id}`}>View Workout</Link></p>
                <br></br>
                </li>)}
            </ul>
        </div>
    )
}

 
// const WorkoutList = ({ workouts }) => {
//     return (
//         <div>
//             <h2>Workouts</h2>
//             <ul>
//                 {workouts.map(n => 
//                 <li key={n.id}>
//                 <h4>{n.title}</h4> 
//                 <p>Focus: {n.focus}</p>
//                 <p><Link to={`/workout/${n.id}`}>View Workout</Link></p>
//                 <br></br>
//                 </li>)}
//             </ul>
//         </div>
//     )
//   };
  
//   export default WorkoutList;