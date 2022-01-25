import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { updateExercise } from "../../actions/ExerciseActions";
import { useParams } from "react-router"

export default function UpdateExerciseForm() {
    const { id } = useParams()
  
    
    const [exercise, setExercise] = useState({
        name: "",
        target: "",
        sets: "",
        reps: "",
        id: ""
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    return (
        <div>
            <p>Update Exercise Form</p>
        </div>
    )
}