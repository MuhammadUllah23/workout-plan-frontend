import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../../actions/UserActions"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        
        console.log(user)
     }
    
    return (
        <div>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>

        <label></label>

        </form>
        </div>
    )
}