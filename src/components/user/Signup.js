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

        <input 
        type="text"
        onChange={e => setUser({...user, username: e.target.value})}
        name="username"
        id="username"
        value={user.username}
        placeholder="Username"
        />
        <br />

        <input 
        type="email"
        onChange={e => setUser({...user, email: e.target.value})}
        name="email"
        id="email"
        value={user.email}
        placeholder="Email"
        />
        <br />

        <input 
        type="password"
        onChange={e => setUser({...user, password: e.target.value})}
        name="password"
        id="password"
        value={user.password}
        placeholder="Password"
        />
        <br />

        <input 
        type="password"
        onChange={e => setUser({...user, password_confirmation: e.target.value})}
        name="password_confirmation"
        id="password_confirmation"
        value={user.password_confirmation}
        placeholder="Confirm Password"
        />
        <br />

        <input className="submitInput" type="submit" value="Signup"/>
        </form>
        </div>
    )
}