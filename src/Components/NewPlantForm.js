import React from 'react'
import WateringFrequencySelect from './WateringFrequencySelect.js'

const NewPlantForm = (props) => (
  <div>
    <form className="form" onSubmit={props.type === "new" ? props.createNewPlant : props.editPlant}>
      <div className="form__group">
        <label className="form__label">Nickname</label>
        <input className="form__input" type="text" name="nickname" placeholder={props.plant && props.plant.nickname}/>
      </div>
      <div className="form__group">
        <label className="form__label">Species</label>
        <input className="form__input" type="text" name="species" placeholder={props.plant && props.plant.species}/>
      </div>
      <div className="form__group">
        <label className="form__label">Image</label>
        <input className="form__input" type="text" name="image" placeholder={props.plant && props.plant.image}/>
      </div>
      <div className="form__group">
        <label className="form__label">Location in home</label>
        <input className="form__input" type="text" name="location" placeholder={props.plant && props.plant.location}/>
      </div>
      <div className="form__group">
        <label className="form__label">Watering Frequency</label>
        <WateringFrequencySelect value={props.plant && props.plant.watering_frequency}/>
      </div>
      <div className="form__group">
        <label className="form__label">Date Obtained</label>
        <input className="form__input" type="text" name="date_obtained" placeholder={props.plant && props.plant.date_obtained}/>
      </div>
      <div className="form__group">
        <input className="btn" type="submit" />
      </div>
    </form>
  </div>
);

export default NewPlantForm;
