import { SIGNUP_USER } from "./constants";

export function createUser(user, navigate) {
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
  .then(data => {
    if (data.message) {
      alert(data.message)
  } else{
    localStorage.setItem('token', data.jwt)
    navigate(`/user/${data.user.id}`)
  }   
  });
    }
}

export function loginUser(user, navigate) {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((r) => r.json())
    .then(data => {
      if (data.message) {
        alert(data.message)
      } else{
       
        localStorage.setItem('token', data.jwt)
        navigate(`/user/${data.user.id}`)
      }   
    });
  }
}