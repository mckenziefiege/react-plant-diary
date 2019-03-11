import React, { Component } from 'react'

class NewPlantForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.createNewPlant}>
        <label>Nickname<input type="text" name="nickname"/></label>
        <label>Species<input type="text" name="species"/></label>
        <label>Image<input type="text" name="image"/></label>
        <label>Location<input type="text" name="location"/></label>
        <label>Watering Frequency<input type="text" name="watering_frequency"/></label>
        <label>Date Obtained<input type="text" name="date_obtained"/></label>
        <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewPlantForm;
