import { Route, Routes } from 'react-router-dom'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'
import WorkoutShow from '../components/WorkoutShow'

export default function WorkoutContainer() {
    return (
        <Routes>
            <Route path="/workouts" element={<WorkoutList/>}/>
            <Route path="/workouts/new" element={<WorkoutForm/>}/>
            <Route path="workout/:id" element={<WorkoutShow/>} />
        </Routes>
    )
}