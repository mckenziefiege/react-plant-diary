import React, { Component } from 'react'

class PlantEntryForm extends Component {

  render() {
    const {plantId} = this.props
    return (
      <div>
        <form id="plant-entry-form" onSubmit={(e) => this.props.createNewEntry(e, plantId)}>
          <textarea rows="4" cols="102" className="plant-entry-input" type="text" name="content"/>
          <button className="btn entry-btn">submit</button>
        </form>
      </div>
    )
  }
}

export default PlantEntryForm;
