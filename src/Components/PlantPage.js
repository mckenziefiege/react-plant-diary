import React, { Component } from 'react'
import PlantEntryForm from './PlantEntryForm.js'
import Comment from './Comment.js'

class PlantPage extends Component {
  render() {
    const {plant} = this.props
    const comments = plant && plant.comments.map(comment => <Comment key={comment.created_at} comment={comment}/>)
    return (
      <div>
        <h1>{plant && plant.nickname}</h1>
        <p>Species: {plant && plant.species}</p>
        <p>Watering Frequency: {plant && plant.watering_frequency}</p>
        <p>Location: {plant && plant.location}</p>
        <img src={plant && plant.image} alt={plant && plant.nickname}/>
        <PlantEntryForm plantId={plant && plant.id}/>
        {comments}
      </div>
    )
  }
}

export default PlantPage;
