import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Plant extends Component {

  render() {
    const {plantObj} = this.props
    return (
      <div className="plant-list-card">
        <Link to={`/plants/${plantObj.id}`}><h3 className="heading-tertiary">{plantObj.nickname} </h3></Link>
        <img className="plant-list-card__image" src={plantObj.image} alt={plantObj.id}/>
      </div>
    )
  }
}

export default Plant;
