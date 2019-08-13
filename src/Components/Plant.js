import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Plant extends Component {

  render() {
    return (
      <div className="plant-list-card">
        <Link to={`/plants/${this.props.plantObj.id}`}><h3 className="heading-tertiary">{this.props.plantObj.nickname} </h3></Link>
        <img className="plant-list-card__image" src={this.props.plantObj.image} alt={this.props.plantObj.id}/>
      </div>
    )
  }
}

export default Plant;
