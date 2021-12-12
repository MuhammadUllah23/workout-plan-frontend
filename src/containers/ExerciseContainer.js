import { Route, Routes } from 'react-router-dom'
import EditExercise from '../components/EditExercise';
import ExerciseForm from '../components/ExerciseForm';
import ExerciseList from '../components/ExerciseList';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';




export default function WorkoutContainer() {
    const dispatch = useDispatch()
    const workouts = useSelector(state => state.exercises)


    useEffect(() => {
        dispatch()
    }, [])

    return (
        <Routes>
            <Route path="/exercises" element={<ExerciseList exercises={exercises}/>}/>
            <Route path="/exercises/new" element={<WorkoutForm/>}/>
            <Route path="/exercise/edit/:id" element={<EditExercise exercises={exercise}/>} />
        </Routes>
        
    )
    
}