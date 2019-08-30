import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import Comment from "./Comment.js";
import PlantEntryForm from "./PlantEntryForm.js";

class PlantPage extends Component {

  deletePlant = (id) => {

    const options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
     }
      fetch(`http://localhost:3000/plants/${id}`, options)
      this.props.history.push("/userfeed")
      document.location.reload(true)
   }

  render() {
    const {plant, comments, userId} = this.props
    const allComments = comments && comments.map((comment, i) => <Comment key={`comment ${i}`}comment={comment}/>)
    return (
      <div className="plant-page">
        <div>
          <h1 className="heading-primary">{plant && plant.nickname}</h1>
          <img className="plant-page__image" src={plant && plant.image} alt={plant && plant.nickname}/>
          <p className="plant-page__description">Species: {plant && plant.species}</p>
          <p className="plant-page__description">Watering Frequency: {plant && plant.watering_frequency}</p>
          <p className="plant-page__description">Location: {plant && plant.location}</p>
          <button onClick={() => this.deletePlant(plant.id)} className="btn">Delete plant</button>
        </div>
        <div>
          <PlantEntryForm plantId={plant && plant.id} userId={userId && userId} createNewEntry={this.props.createNewEntry}/>
          {allComments}
        </div>
      </div>
    )
  }
}

export default withRouter(PlantPage);
