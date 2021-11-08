import React from 'react'
import './Checkbox.scss'
export default function Checkbox(props) {
  return (
    <div className="Checkbox">
      <input
        onChange={props.CheckboxHandler}
        checked={props.checked}
        type="checkbox"
        id="pending"
        name="pending"
        value="pending"
      ></input>
      <label htmlFor="pending"> pending Approval</label>
    </div>
  )
}
