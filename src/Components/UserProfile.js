import React, { Component } from 'react'
import UserPlants from './UserPlants.js'
import NewPlantForm from './NewPlantForm.js'

class UserProfile extends Component {

  createNewPlant = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({
           nickname: e.target.nickname.value,
           species: e.target.species.value,
           image: e.target.image.value,
           location: e.target.location.value,
           watering_frequency: e.target.watering_frequency.value,
           date_obtained: e.target.date_obtained.value,
           user_id: this.props.user.id
         })
        }
        fetch('http://localhost:3000/plants', options)
          .then(resp => resp.json())
      }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>Welcome {this.props.user.first_name}!</p>
        <NewPlantForm createNewPlant={this.createNewPlant}/>
        <UserPlants plants={this.props.user.plants}/>
      </div>
    )
  }
}

export default UserProfile;
