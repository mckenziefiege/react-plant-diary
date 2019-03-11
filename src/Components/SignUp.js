import React, { Component } from 'react'

class SignUp extends Component {

  render() {
    return (
      <div>
        <h3 className="heading-tertiary">Sign Up</h3>
        <form className="form" onSubmit={this.props.handleSignup}>
          <div className="form__group">
            <input className="form__input" type="text" name="firstname"/>
            <label className="form__label">First Name</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="username"/>
            <label className="form__label">Username</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="password" name="password"/>
            <label className="form__label">Password</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="image"/>
            <label className="form__label">Image</label>
          </div>
          <div className="form__group">
            <input className="btn" type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
