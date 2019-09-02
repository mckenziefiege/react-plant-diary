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
          <div>
            <h3 className="heading-primary">Add New Plant</h3>
            <NewPlantForm createNewPlant={this.props.createNewPlant} type="new"/>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
