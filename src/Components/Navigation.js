import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (
      <div className="nav-container">
        <button className="nav-container__item" onClick={this.props.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default Navigation;
