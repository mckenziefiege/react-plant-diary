import React, { Component } from 'react'

class PlantPage extends Component {
  render() {
    console.log(this.props.plant)
    return (
      <div>
        <h1>{this.props.plant && this.props.plant.nickname}</h1>
      </div>
    )
  }
}

export default PlantPage;
