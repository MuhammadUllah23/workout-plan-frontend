import { Route, Routes } from 'react-router-dom'
import './App.css';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
    <NavBar />
    <Routes>
      <Route path="/workouts" element={<WorkoutList/>}/>
      <Route path="/workouts/new" element={<WorkoutForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
