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
