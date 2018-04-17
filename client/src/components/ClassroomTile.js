import React from 'react'

const ClassroomTile = (props) => {
  console.log(props.students)
  let students = props.students.map(student => {
    return(
      <h3 key = {student.id}>{student.name}</h3>
    )
  })

  return(
  <div>
    <h1>{props.classroom}</h1>
      {students}
  </div>
  )
}

export default ClassroomTile
