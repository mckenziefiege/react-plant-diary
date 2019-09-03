import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (
      <div className="nav-container">
        <h1 className="nav-container__item plant-diary">Plant Diary</h1>
        <button className="nav-container__item btn" onClick={this.props.handleLogout}>Log Out</button>
        {window.location.pathname !== '/userfeed' && <Link className="nav-container__item btn" to="/userfeed">Home</Link>}
      </div>
    )
  }
}

export default Navigation;
