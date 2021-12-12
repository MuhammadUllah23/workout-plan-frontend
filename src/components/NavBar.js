import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div id='nav'>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/workouts/new">Create Workout</Link>
        <Link to="/exercises">Exercises</Link>
    </div>

  )
}

export default NavBar