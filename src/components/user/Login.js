import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        // dispatch(loginUser({user}, navigate))
    }
    return (
        <div>
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
        
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

            <input className="submitInput" type="submit" value="Login"/>
            </form>
        </div>
    )
}