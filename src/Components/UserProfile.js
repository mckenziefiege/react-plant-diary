import React, { Component } from 'react'
import UserPlants from './UserPlants.js'
import NewPlantForm from './NewPlantForm.js'
import ToDoList from './ToDoList.js'

class UserProfile extends Component {

  render() {
    return (
      <div>
        <h3 className="heading-tertiary">Welcome {this.props.user.first_name}!</h3>
        <img className="user-photo" src={this.props.user.image}/>
        <NewPlantForm createNewPlant={this.props.createNewPlant}/>
        <ToDoList tasks={this.props.tasks} createNewTask={this.props.createNewTask} deleteTask={this.props.deleteTask}/>
        <UserPlants plants={this.props.plants}/>
      </div>
    )
  }
}

export default UserProfile;
