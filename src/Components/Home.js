import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        <h3 className="heading-tertiary">Welcome to</h3>
        <h1 className="heading-primary">Plant Diary</h1>
        <Link to="/login"><button className="btn">Login</button></Link>
        <Link to="/signup"><button className="btn">Sign Up</button></Link>
      </div>
    )
  }
}

export default Home;
