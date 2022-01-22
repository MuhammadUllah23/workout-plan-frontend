import NavBar from './components/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchWorkouts } from './actions/WorkoutActions';
import { fetchExercises } from './actions/ExerciseActions';
import { fetchUsers } from './actions/UserActions'; 

import ExerciseForm from './components/exercise/ExerciseForm';
import ExerciseList from './components/exercise/ExerciseList';
import WorkoutForm from './components/workout/WorkoutForm';
import WorkoutList from './components/workout/WorkoutList'
import WorkoutShow from './components/workout/WorkoutShow'
import Home from './components/Home';
import Login from './components/user/Login'
import Signup from './components/user/Signup';
import UserList from './components/user/UserList';
import ShowUser from './components/user/ShowUser';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchWorkouts())
      dispatch(fetchExercises())
      dispatch(fetchUsers())
  }, [])


  return (
    <div className="App">
    <h1 id='bigTitle'>Workout Plan</h1>
    <NavBar />
    <Routes>
            <Route path="/workouts" element={<WorkoutList />}/>
            <Route path="/workouts/new" element={<WorkoutForm/>}/>
            <Route path="/workout/:id" element={<WorkoutShow />} />
            <Route path="/exercises" element={<ExerciseList  />}/>
            <Route path="/workout/:id/exercises/new" element={<ExerciseForm />}/>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path='/users' element={<UserList/>} />
            <Route path='/user/:id' element={<ShowUser />}/>
      </Routes>
    </div>
  );
}

export default App;
