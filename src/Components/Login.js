import React, { Component } from 'react'

class Login extends Component {

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.props.handleLogin}>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login;
