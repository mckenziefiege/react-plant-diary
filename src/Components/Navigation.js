import React, { Component } from 'react'

class Navigation extends Component {

  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.handleLogout}>Log Out</button>
        <img className="user-photo" src={this.props.user.image}/>
      </div>
    )
  }
}

export default Navigation;
