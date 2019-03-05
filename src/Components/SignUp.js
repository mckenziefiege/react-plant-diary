import React, { Component } from 'react'

class SignUp extends Component {

  render() {
    return (
      <div>
      <h3>Sign Up</h3>
      <form>
        <input type="text" name="username" placeholder="Username"/>
        <input type="text" name="password" placeholder="Password"/>
        <input type="text" name="image" placeholder="image"/>
        <input type="text" name="firstname" placeholder="first name"/>
        <input type="submit"/>
      </form>
      </div>
    )
  }
}

export default SignUp;
