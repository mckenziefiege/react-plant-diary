import React, { Component } from 'react'
import UserPlants from './UserPlants.js'
// import NewPlantForm from './NewPlantForm.js'

class UserProfile extends Component {

  render() {
    return (
      <div>
        <h3 className="heading-tertiary">Welcome {this.props.user.first_name}!</h3>
        <UserPlants plants={this.props.plants}/>
      </div>
    )
  }
}

export default UserProfile;
