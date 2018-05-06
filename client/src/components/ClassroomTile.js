import React from 'react';
import CreateAttendanceContainer from '../containers/CreateAttendanceContainer';
import CreateNoteContainer from '../containers/CreateNoteContainer';

const ClassroomTile = (props) => {
    let notes = props.notes.map(note => {
      return(
        <h3>{note.title}: {note.note}</h3>
      )
    })
    let dailyAttendance = props.daily_attendances.map(attendance => {
      return(
        <h3> {attendance.date}: {attendance.attendance}</h3>
      )
    })

  return(
  <div>
    <h1>{props.name}</h1>
    <h2>Attendance:</h2>
    {dailyAttendance}
    <h2>Notes:</h2>
    {notes}

    <CreateAttendanceContainer
      date = {props.date}
      student = {props.id}
      dailyAttendance = {props.dailyAttendance}
    />

    <CreateNoteContainer
      date = {props.date}
      student = {props.id}
      createNote = {props.createNote}
    />
  </div>
  )
}

export default ClassroomTile
