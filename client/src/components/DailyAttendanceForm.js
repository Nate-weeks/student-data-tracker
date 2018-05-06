import React from 'react'

const DailyAttendanceForm = (props) => {
  return(
    <form>
      <div className="radio">
        <label>
          <input onChange={props.handleChange} type="radio" value="present" checked ={props.checked === 'present'}/>
          Present
        </label>
      </div>
      <div className="radio">
        <label>
          <input onChange={props.handleChange} type="radio" value="tardy" checked = {props.checked === 'tardy'} />
          Tardy
        </label>
      </div>
      <div className="radio">
        <label>
          <input onChange={props.handleChange} type="radio" value="absent" checked = {props.checked === 'absent'} />
          Absent
        </label>
      </div>
      <button className="attendance-button" type="submit" onClick={props.handleSubmit}>save attendance</button>
    </form>
  )
}

export default DailyAttendanceForm
