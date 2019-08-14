import React, { Component } from 'react'

class PlantEntryForm extends Component {

  createNewEntry = (e, id) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify ({
           content: e.target.content.value,
           plant_id: id
         })
        }
      fetch('http://localhost:3000/comments', options)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }

  render() {
    const {plantId} = this.props
    return (
      <div>
        <form onSubmit={(e) => this.createNewEntry(e, plantId)}>
          <input type="text" name="content"/>
          <button >Create Entry</button>
        </form>
      </div>
    )
  }
}

export default PlantEntryForm;
