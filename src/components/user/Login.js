import { useState } from "react";

export default function login({ onLogin }) {
    const [user, setUser] = useState("");
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

            <input className="submitInput" type="submit" />
            </form>
        </div>
    )
}