import { Route, Routes } from 'react-router-dom'
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import WorkoutShow from '../components/WorkoutShow'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkouts } from '../actions/WorkoutActions';



export default function WorkoutContainer({}) {
    const dispatch = useDispatch()
    const workouts = useSelector(state => state.workouts)


    useEffect(() => {
        dispatch(fetchWorkouts())
    }, [])

    return (
        <Routes>
            <Route path="/workouts" element={<WorkoutList workouts={workouts}/>}/>
            <Route path="/workouts/new" element={<WorkoutForm/>}/>
            <Route path="/workout/:id" element={<WorkoutShow />} />
        </Routes>
        
    )
    
}