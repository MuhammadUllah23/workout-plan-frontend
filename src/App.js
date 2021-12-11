import { Route, Routes } from 'react-router-dom'
import './App.css';
import react from 'react';
import WorkoutList from './components/WorkoutList';

function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
    <Routes>
      <Route path="/workouts" element={<WorkoutList/>}/>
    </Routes>
    </div>
  );
}

export default App;
