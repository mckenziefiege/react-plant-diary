import React, { Component } from 'react'

class Navigation extends Component {

  render() {
    return (
      <div>
      <button onClick={this.props.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default Navigation;
