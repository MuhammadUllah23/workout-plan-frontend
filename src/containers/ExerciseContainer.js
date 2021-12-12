import { Route, Routes } from 'react-router-dom'
import EditExercise from '../components/EditExercise';
import ExerciseForm from '../components/ExerciseForm';
import ExerciseList from '../components/ExerciseList';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchExercises } from '../actions/ExerciseActions';



export default function ExerciseContainer() {
    const dispatch = useDispatch()
    const exercises = useSelector(state => state.exercises)

    useEffect(() => {
        dispatch(fetchExercises())
    }, [])

    return (
        <Routes>
            <Route path="/exercises" element={<ExerciseList exercises={exercises} />}/>
            <Route path="/exercises/new" element={<ExerciseForm />}/>
            <Route path="/exercise/edit/:id" element={<EditExercise exercises={exercises}/>} />
        </Routes>
        
    )
    
}