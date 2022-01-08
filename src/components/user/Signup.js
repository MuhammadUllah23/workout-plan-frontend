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
        <form className="form" onSubmit={handleSubmit}>

        <label>Username: </label>
        <input 
        type="text"
        onChange={e => setUser({...user, username: e.target.value})}
        name="username"
        id="username"
        value={user.username}>
        </input>
        <br />

        <label>Email: </label>
        <input 
        type="email"
        onChange={e => setUser({...user, email: e.target.value})}
        name="email"
        id="email"
        value={user.email}>
        </input>
        <br />

        <label>Password: </label>
        <input 
        type="password"
        onChange={e => setUser({...user, password: e.target.value})}
        name="password"
        id="password"
        value={user.password}>
        </input>
        <br />

        <label>Confirm Password: </label>
        <input 
        type="password"
        onChange={e => setUser({...user, password_confirmation: e.target.value})}
        name="password_confirmation"
        id="password_confirmation"
        value={user.password_confirmation}>
        </input>
        <br />

        <input className="submitInput" type="submit" />
        </form>
        </div>
    )
}