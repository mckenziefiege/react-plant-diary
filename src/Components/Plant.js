import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Plant extends Component {

  render() {
    const {plantObj} = this.props
    return (
      <Link className="plant-link" to={`/plants/${plantObj.id}`}>
        <div className="plant-list-card">
          <h3 className="heading-tertiary">{plantObj.nickname} </h3>
          <img className="plant-list-card__image" src={plantObj.image} alt={plantObj.id}/>
        </div>
      </Link>
    )
  }
}

export default Plant;
