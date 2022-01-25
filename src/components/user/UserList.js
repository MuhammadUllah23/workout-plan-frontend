import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function UserList() {
    const allUsers = useSelector(state => state.users)
    
    return (
        <p>user list</p>
    )
}