import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './workout.css'

export default function WorkoutList() {
 
const allWorkouts = useSelector(state => state.workouts)





    return (
        <div >
            <h2>Workouts</h2>
            <div className='container'>
              <ul id='workoutList'>
                {allWorkouts.map(n => 
                    <li key={n.id} className='workout'>
                    <h4>{n.title}</h4> 
                    <p>Focus: {n.focus}</p>
                    <p><Link className='link' to={`/workout/${n.id}`}>View Workout</Link></p>
                    
                <br></br>
                </li>
                )}
            </ul>  
            </div>
            
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