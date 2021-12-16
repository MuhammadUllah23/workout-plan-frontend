import React from 'react'
import {Link} from 'react-router-dom'


export default function NavBar() {

  return (
    <header className='header'>
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/workouts/new">Create Workout</Link>
        <Link to="/exercises">Exercises</Link>
    </div>
    </header>
  )
}

