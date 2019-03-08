import React, { Component } from 'react'

class Plant extends Component {

  render() {
    return (
      <div>
        <div>
        <h3>{this.props.plantObj.nickname}</h3>
        <p>{this.props.plantObj.species}</p>
        <img src={this.props.plantObj.image} alt="Plant `${this.props.plantObj.id}`"/>
        <p>{this.props.plantObj.watering_frequency}</p>
        <p>{this.props.plantObj.date_obtained}</p>
        <p>{this.props.plantObj.location}</p>
        </div>
      </div>
    )
  }
}

export default Plant;
