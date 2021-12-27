import React from 'react'
// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

  return (
    <header className='header'>
    <div className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
        <NavLink to="/workouts/new">Create Workout</NavLink>
        <NavLink to="/exercises">Exercises</NavLink>
    </div>
    </header>
  )
}

