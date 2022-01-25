import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { updateWorkout } from "../../actions/WorkoutActions";
import { useParams } from "react-router"

export default function UpdateWorkoutForm() {

    const { id } = useParams()

    const [workout, setWorkout] = useState({
        title: "",
        focus: "",
        id: ""
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div>
            <p>Update Workout Form</p>
        </div>
    )
}