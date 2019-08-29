import React, { Component } from 'react'
import WateringFrequencySelect from './WateringFrequencySelect.js'

const NewPlantForm = (props) => (
  <div>
    <h3 className="heading-primary">Add New Plant</h3>
    <form className="form" onSubmit={props.createNewPlant}>
      <div className="form__group">
        <label className="form__label">Nickname</label>
        <input className="form__input" type="text" name="nickname" placeholder="Fred"/>
      </div>
      <div className="form__group">
        <label className="form__label">Species</label>
        <input className="form__input" type="text" name="species" placeholder="Monstera Adansonii"/>
      </div>
      <div className="form__group">
        <label className="form__label">Image</label>
        <input className="form__input" type="text" name="image" placeholder="http://"/>
      </div>
      <div className="form__group">
        <label className="form__label">Location in home</label>
        <input className="form__input" type="text" name="location" placeholder="Living Room"/>
      </div>
      <div className="form__group">
        <label className="form__label">Watering Frequency</label>
        <WateringFrequencySelect />
      </div>
      <div className="form__group">
        <label className="form__label">Date Obtained</label>
        <input className="form__input" type="text" name="date_obtained" placeholder="5/25/2019"/>
      </div>
      <div className="form__group">
        <input className="btn" type="submit" />
      </div>
    </form>
  </div>
)


export default NewPlantForm;
