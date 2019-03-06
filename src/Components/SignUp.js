import React, { Component } from 'react'

class SignUp extends Component {

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.props.handleSignup}>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="text" name="image" placeholder="image"/>
          <input type="text" name="firstname" placeholder="first name"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUp;
