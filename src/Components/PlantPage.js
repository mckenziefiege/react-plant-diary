import React, { Component } from 'react'

class PlantPage extends Component {
  render() {
    const {plant} = this.props
    return (
      <div>
        <h1>{plant && plant.nickname}</h1>
        <p>Species: {plant && plant.species}</p>
        <p>Watering Frequency: {plant && plant.watering_frequency}</p>
        <p>Location: {plant && plant.location}</p>
        <img src={plant && plant.image} alt={plant && plant.nickname}/>
      </div>
    )
  }
}

export default PlantPage;
