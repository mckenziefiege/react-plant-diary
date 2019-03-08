import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>

        <p>Welcome to</p>
        <h1>Plant Diary</h1>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    )
  }
}

export default Home;
