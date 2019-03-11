import React, { Component } from 'react'

class NewPlantForm extends Component {
  render() {
    return (
      <div>
      <h3 className="heading-tertiary">New Plant Form</h3>
        <form className="form" onSubmit={this.props.createNewPlant}>
          <div className="form__group">
            <input className="form__input" type="text" name="nickname"/>
            <label className="form__label">Nickname</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="species"/>
            <label className="form__label">Species</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="image"/>
            <label className="form__label">Image</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="location"/>
            <label className="form__label">Location</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="watering_frequency"/>
            <label className="form__label">Watering Frequency</label>
          </div>
          <div className="form__group">
            <input className="form__input" type="text" name="date_obtained"/>
            <label className="form__label">Date Obtained</label>
          </div>
          <div className="form__group">
            <input className="btn" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewPlantForm;
