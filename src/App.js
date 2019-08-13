import React, { Component } from "react"
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login.js'
import SignUp from './Components/SignUp.js'
import Home from './Components/Home.js'
import Navigation from './Components/Navigation.js'
import UserProfile from './Components/UserProfile.js'
import Footer from './Components/Footer.js'
import NewPlantForm from './Components/NewPlantForm.js'
import ToDoList from './Components/ToDoList.js'
import PlantPage from './Components/PlantPage.js'

import './css/styles.css'

class App extends Component {
  state = {
    auth: { currentUser: {} },
    plants: [],
    tasks: []
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
        auth: {currentUser: resp.user},
        plants: resp.user.plants,
        tasks: resp.user.tasks
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
       "Accept": "application/json"
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
         auth: {currentUser: resp.user},
         plants: resp.user.plants,
         tasks: resp.user.tasks
       })
     })
    this.props.history.push("/userfeed")
 }

 handleSignup = (e) => {
   e.preventDefault()
   const options = {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify (
       {
        user: {
          username: e.target.username.value,
          first_name: e.target.firstname.value,
          password: e.target.password.value,
          image: e.target.image.value
        }
      }
    )
  }
   fetch('http://localhost:3000/users', options)
     .then(resp => resp.json())
     .then(resp => {
       localStorage.setItem("token", resp.jwt)
       this.setState({
         auth: {currentUser: resp.user}
       })
     })
     this.props.history.push("/userfeed")
 }

 createNewPlant = (e) => {
   e.preventDefault()
   const options = {
     method: 'POST',
     headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`},
     body: JSON.stringify ({
          nickname: e.target.nickname.value,
          species: e.target.species.value,
          image: e.target.image.value,
          location: e.target.location.value,
          watering_frequency: e.target.watering_frequency.value,
          date_obtained: e.target.date_obtained.value,
          user_id: this.state.auth.currentUser.id
        })
       }
       fetch('http://localhost:3000/plants', options)
         .then(resp => resp.json())
         .then(resp => this.setState({
           plants: [...this.state.plants, resp]
         }))
     }

     createNewTask = (e) => {
       e.preventDefault()
       const options = {
         method: 'POST',
         headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
         body: JSON.stringify ({
              content: e.target.content.value,
              user_id: this.state.auth.currentUser.id
            })
           }
           fetch('http://localhost:3000/tasks', options)
             .then(resp => resp.json())
             .then(resp => this.setState({
               tasks: [...this.state.tasks, resp]
             }))
         }

   deleteTask = (id) => {
     const options = {
       method: 'DELETE',
       headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      }
       let newTasks = this.state.tasks.filter(task => task.id !== id)
       console.log(newTasks)
       fetch(`http://localhost:3000/tasks/${id}`, options)
        this.setState({
          tasks: newTasks
        })
    }

 renderSignup = () => {
    return <SignUp handleSignup={this.handleSignup} />
  }

  renderLogin = () => {
     return <Login handleLogin={this.handleLogin} />
   }

   renderUserProfile = () => {
      return <UserProfile user={this.state.auth.currentUser} plants={this.state.plants} createNewPlant={this.createNewPlant} createNewTask={this.createNewTask} tasks={this.state.tasks} deleteTask={this.deleteTask}/>
    }

    renderNewPlantForm = () => {
      return <NewPlantForm createNewPlant={this.createNewPlant}/>
    }

    renderToDoList = () => {
      return <ToDoList tasks={this.state.tasks} createNewTask={this.createNewTask} deleteTask={this.deleteTask}/>
    }

    renderPlantPage = (props) => {
      let id = parseInt(props.match.params.plantsId)
      let plant = this.state.plants.filter(obj => obj.id === id)[0]
      return <PlantPage plant={plant}/>
    }

  render() {
    return (
      <div>
      <Navigation user={this.state.auth.currentUser} handleLogout={this.handleLogout} />
        <Switch>
           <Route path="/login" render={this.renderLogin}/>
           <Route path="/signup" render={this.renderSignup}/>
           <Route path="/add-plant" render={this.renderNewPlantForm}/>
           <Route path="/todos" render={this.renderToDoList}/>
           <Route exact path="/plants/:plantsId" render={this.renderPlantPage} />
           <Route path="/userfeed" render={this.renderUserProfile}/>
           <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    )
  }

}

export default withRouter(App);
