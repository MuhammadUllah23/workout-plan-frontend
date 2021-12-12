import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router";


export default function ExerciseForm({}) {
    const location = useLocation()
    const { workoutId } = location.state
    debugger
    return (
        <p>hi</p>
    )

}