import NavBar from './components/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchWorkouts } from './actions/WorkoutActions';
import { fetchExercises } from './actions/ExerciseActions';

import ExerciseForm from './components/ExerciseForm';
import ExerciseList from './components/ExerciseList';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList'
import WorkoutShow from './components/WorkoutShow'
import Home from './components/Home';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchWorkouts())
      dispatch(fetchExercises())
  }, [])


  return (
    <div className="App">
    <h1>Workout Plan</h1>
    <NavBar />
    <Routes>
            <Route path="/workouts" element={<WorkoutList />}/>
            <Route path="/workouts/new" element={<WorkoutForm/>}/>
            <Route path="/workout/:id" element={<WorkoutShow />} />
            <Route path="/exercises" element={<ExerciseList  />}/>
            <Route path="/exercises/new" element={<ExerciseForm />}/>
            <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
