import NavBar from './components/NavBar';
import './App.css';
// import WorkoutList from './components/WorkoutList';
// import WorkoutForm from './components/WorkoutForm';
// import WorkoutShow from './components/WorkoutShow';
import WorkoutContainer from './containers/WorkoutContainer';

function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
    <NavBar />
    <WorkoutContainer />
    {/* <Routes>
      <Route path="/workouts" element={<WorkoutList/>}/>
      <Route path="/workouts/new" element={<WorkoutForm/>}/>
      <Route path="workout/:id" element={<WorkoutShow/>} />
    </Routes> */}
    </div>
  );
}

export default App;
