import React, { Component } from 'react'
import UserPlants from './UserPlants.js'
import ToDoList from './ToDoList.js'
import NewPlantForm from './NewPlantForm'

class UserProfile extends Component {

  render() {
    const {plants} = this.props
    return (
      <div className="user-profile">
        <UserPlants plants={plants}/>
        <div>
          <ToDoList tasks={this.props.tasks} createNewTask={this.props.createNewTask} deleteTask={this.props.deleteTask}/>
          <NewPlantForm createNewPlant={this.props.createNewPlant}/>
        </div>
      </div>
    )
  }
}

export default UserProfile;
