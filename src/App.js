import NavBar from './components/NavBar';
import './App.css';
import ExerciseContainer from './containers/ExerciseContainer';
import WorkoutContainer from './containers/WorkoutContainer';

function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
    <NavBar />
    <WorkoutContainer />
    <ExerciseContainer />
    </div>
  );
}

export default App;
