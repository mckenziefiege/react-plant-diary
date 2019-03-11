import React, { Component } from 'react'

class Plant extends Component {

  render() {
    return (
      <div className="plant-list-card">
        <h3 className="heading-tertiary">{this.props.plantObj.nickname}</h3>
        <img className="plant-list-card__image" src={this.props.plantObj.image} alt="Plant `${this.props.plantObj.id}`"/>
      </div>
    )
  }
}

export default Plant;
