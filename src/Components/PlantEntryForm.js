import React, { Component } from 'react'

class PlantEntryForm extends Component {

  render() {
    console.log(this.props)
    const {plantId} = this.props
    return (
      <div>
        <form onSubmit={(e) => this.props.createNewEntry(e, plantId)}>
          <input type="text" name="content"/>
          <button >Create Entry</button>
        </form>
      </div>
    )
  }
}

export default PlantEntryForm;
