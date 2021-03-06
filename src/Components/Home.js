import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div className="home">
      <h1 className="plant-diary">Plant Diary</h1>
      <h2 className="heading-primary">Welcome</h2>
        <div className="home-box">
          <Link to="/login"><button className="btn">Login</button></Link>
          <Link to="/signup"><button className="btn">Sign Up</button></Link>
        </div>
        <div className="home-page">
        </div>
      </div>
    )
  }
}

export default Home;
