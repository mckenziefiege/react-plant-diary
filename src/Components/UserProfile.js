import React, { Component } from 'react'
import UserPlants from './UserPlants.js'

class UserProfile extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <p>Welcome {this.props.user.first_name}!</p>
        <UserPlants plants={this.props.user.plants}/>
      </div>
    )
  }
}

export default UserProfile;
