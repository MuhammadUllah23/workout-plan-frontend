import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/UserActions";

export default function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginUser({user}, navigate))
    }
    return (
        <div>
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
        
            <input 
            type="text"
            onChange={e => setUser({...user, username: e.target.value})}
            name="username"
            id="username"
            value={user.username}
            placeholder="username"
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