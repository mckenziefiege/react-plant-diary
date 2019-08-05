import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (
      <div className="nav-container">
        <Link to="/add-plant"><p className="nav-container__item">Add a Plant</p></Link>
        <Link to="/todos"><p className="nav-container__item">My Todos</p></Link>
        <p className="nav-container__item">My Plants</p>
        <p className="nav-container__item" onClick={this.props.handleLogout}>Log Out</p>
      </div>
    )
  }
}

export default Navigation;


  // <img className="user-photo" src={this.props.user.image}/>
