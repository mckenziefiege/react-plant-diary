import React from 'react'

function WateringFrequencySelect (props) {
  const frequencies = ["Weekly", "Bi-weekly", "Monthly"]
  const options = frequencies.map(val => <option key={val} value={val}>{val}</option>)

  return (
    <select name="watering_frequency" className="form__input">
      {options}
    </select>
  )
}

export default WateringFrequencySelect;
