import React, { Component } from 'react'
import UserPlants from './UserPlants.js'

class UserProfile extends Component {

  render() {
    const {user, plants} = this.props
    return (
      <div>
        <h3 className="heading-tertiary">Welcome {user.first_name}!</h3>
        <UserPlants plants={plants}/>
      </div>
    )
  }
}

export default UserProfile;
