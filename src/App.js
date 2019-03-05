import React, { Component } from 'react'
import './App.css'
// import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login.js'
import SignUp from './Components/SignUp.js'
import Home from './Components/Home.js'
import Navigation from './Components/Navigation.js'
import Plant from './Components/Plant.js'
import UserPlants from './Components/UserPlants.js'
import UserProfile from './Components/UserProfile.js'
import ToDoList from './Components/ToDoList.js'
import Task from './Components/Task.js'

class App extends Component {
  state = {
  auth: { currentUser: {} },
}

componentDidMount () {
  const token = localStorage.getItem('token')
  if (token) {
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(resp =>
      this.setState({
        auth: {currentUser: resp.user}
      })
    )
  }
}

handleLogout = () => {
  localStorage.removeItem("token")
  this.setState({ auth: { currentUser: {} } })
  this.props.history.push("/")
}

handleLogin = (e) => {
   e.preventDefault()
   fetch("http://localhost:3000/login", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     body: JSON.stringify({
       user: {
         username: e.target.username.value,
         password: e.target.password.value
       }
     })
   })
     .then(resp => resp.json())
     .then(resp => {
       localStorage.setItem("token", resp.jwt)
       this.setState({
         auth: {currentUser: resp.user}
       })
     })
 }

 handleSignup = (e) => {
   e.preventDefault()
   const options = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({ user: {
       first_name: e.target['first-name'].value,
       username: e.target.username.value,
       password: e.target.password.value,
       image: e.target.image.value }
     })
   }
   fetch('http://localhost:3000/users', options)
     .then(resp => resp.json())
     .then(resp => {
       localStorage.setItem("token", resp.jwt)
       this.setState({
         auth: {currentUser: resp.user}
       })
     })
 }

  render() {
    return (
      <div>
        <Login />
        <Home />
        <Navigation />
        <Plant />
        <UserPlants />
        <UserProfile />
        <SignUp />
        <Task />
        <ToDoList />
      </div>
    )
  }
}

export default App;
