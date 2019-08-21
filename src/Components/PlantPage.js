import React, { Component } from "react";
import Comment from "./Comment.js";
import PlantEntryForm from "./PlantEntryForm.js";

class PlantPage extends Component {
  render() {
    const {plant, comments, userId} = this.props
    const allComments = comments && comments.map(comment => <Comment comment={comment}/>)
    return (
      <div className="plant-page">
        <div>
          <h1>{plant && plant.nickname}</h1>
          <img className="plant-page__image" src={plant && plant.image} alt={plant && plant.nickname}/>
          <p>Species: {plant && plant.species}</p>
          <p>Watering Frequency: {plant && plant.watering_frequency}</p>
          <p>Location: {plant && plant.location}</p>
        </div>
        <div>
          <PlantEntryForm plantId={plant && plant.id} userId={userId && userId} createNewEntry={this.props.createNewEntry}/>
          {allComments}
        </div>
      </div>
    )
  }
}

export default PlantPage;
