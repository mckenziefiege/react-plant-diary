import React, { Component } from 'react'
import Plant from './Plant.js'

class UserPlants extends Component {

  getPlants = () => {
  if (this.props.plants !== undefined) {
    return this.props.plants.map(plant => <Plant plantObj={plant} key={plant.id}/>)
  }
}

  render() {
    return (
      <div>
        {this.getPlants()}
      </div>
    )
  }
}

export default UserPlants;
