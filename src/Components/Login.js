import React, { Component } from 'react'

class Login extends Component {

  render() {
    return (
      <div className="home">
        <h3 className="heading-tertiary">Login to Plant Diary</h3>
        <form className="form" onSubmit={this.props.handleLogin}>
        <div className="form__group">
          <input className="form__input" type="text" name="username"/>
          <label className="form__label">Username</label>
        </div>
        <div className="form__group">
          <input className="form__input" type="password" name="password"/>
          <label className="form__label">Password</label>
        </div>
        <div className="form__group">
          <input className="btn" type="submit"/>
        </div>
        </form>
      </div>
    )
  }
}

export default Login;
