import { Route, Routes } from 'react-router-dom'
import ExerciseForm from '../components/ExerciseForm';
import ExerciseList from '../components/ExerciseList';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchExercises } from '../actions/ExerciseActions';
// import WorkoutContainer from './WorkoutContainer';


export default function ExerciseContainer() {
    const dispatch = useDispatch()
    const exercises = useSelector(state => state.exercises)

    useEffect(() => {
        dispatch(fetchExercises())
    }, [])

    return (
        <div>
            {/* <WorkoutContainer exercises={exercises}/> */}
            <Routes>
                <Route path="/exercises" element={<ExerciseList exercises={exercises} />}/>
                <Route path="/exercises/new" element={<ExerciseForm />}/>
            </Routes>
        </div>
       
        
    )
    
}