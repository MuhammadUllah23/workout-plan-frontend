import { SIGNUP_USER } from "./constants";

export function createUser(user) {
    return dispatch =>{
        fetch("http://localhost:3000/api/v1/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(user),
})
  .then((r) => r.json())
  .then(console.log);
    }
}