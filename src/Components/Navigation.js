import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (
      <div className="nav-container">
        <Link to="/add-plant"><p className="nav-container__item">Add a Plant</p></Link>
        <Link to="/todos"><p className="nav-container__item">My Todos</p></Link>
        <Link to="/userfeed"><p className="nav-container__item">Home</p></Link>
        <button className="nav-container__item" onClick={this.props.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default Navigation;
