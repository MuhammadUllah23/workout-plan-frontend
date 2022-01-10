import React from 'react'

import { NavLink } from 'react-router-dom'

export default function NavBar() {

  return (
    <header className='header'>
    <div className='navbar'>
      <ul className='navLinks'>
        <li><NavLink to="/" id='home'>Home</NavLink></li>
        <li><NavLink to="/workouts" id='workouts'>Workouts</NavLink></li>
        <li><NavLink to="/workouts/new" id='create'>Create Workout</NavLink></li>
        <li><NavLink to="/exercises" id='exercises'>Exercises</NavLink></li>
        <li><NavLink to="/signup" id='signup'>Signup</NavLink></li>
        <li><NavLink to="/login" id='login'>Login</NavLink></li>
      </ul>
        
    </div>
    </header>
  )
}

