import React, { Component } from 'react'
import Plant from './Plant.js'

class UserPlants extends Component {
  render() {
    const {plants} = this.props
    const allPlants = plants !== undefined && plants.map(plant => <Plant plantObj={plant} key={plant.id}/>)
    return (
      <div>
        <h3 className="heading-primary my-plants">My plants</h3>
        <div className="user-plants-container">
          {allPlants}
        </div>
      </div>
    )
  }
}

export default UserPlants;
