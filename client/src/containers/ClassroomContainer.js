import React, {Component} from 'react';
import ClassroomTile from '../components/ClassroomTile';
import Calendar from 'react-calendar';
import { Link }from 'react-router-dom';
import CreateStudentContainer from './CreateStudentContainer'

class ClassroomContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: [],
      classroom: '',
      date: new Date()
    }
    this.addNewStudent = this.addNewStudent.bind(this)
    this.createDailyAttendance = this.createDailyAttendance.bind(this)
    this.createNote = this.createNote.bind(this)
  }

  componentDidMount() {
    let classroom_id = this.props.match.params["classroom_id"]
    fetch(`/api/v1/classrooms/${classroom_id}`,{
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {console.log(body)
        this.setState({
          students: body,
          classroom: body[0].classroom.name,
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


  addNewStudent(formPayload){
    let classroom_id = this.props.match.params["classroom_id"]
    fetch(`/api/v1/classrooms/${classroom_id}`,{
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({student: formPayload})
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        students: body,
      })
    })
  }

  createDailyAttendance(formPayload){
    let classroom_id = this.props.match.params["classroom_id"]
    fetch(`/api/v1/classrooms/${classroom_id}/daily_attendances`,{
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({attendance: formPayload})
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        students: body,
      })
    })
  }

  createNote(formPayload){
    let classroom_id = this.props.match.params["classroom_id"]
    fetch(`/api/v1/classrooms/${classroom_id}/notes`,{
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({note: formPayload})
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        students: body,
      })
    })
  }


  onChange = date => this.setState({ date })

  render(){

    let students = this.state.students.map(student => {
      return(
        <ClassroomTile
          key = {student.id}
          id = {student.id}
          name = {student.name}
          daily_attendances = {student.daily_attendances}
          notes = {student.notes}
          date = {this.state.date}
          dailyAttendance = {this.createDailyAttendance}
          createNote = {this.createNote}
        />
      )
    })

    return(
      <div>
      <h1>{this.state.classroom}</h1>
      {students}
      <Calendar
      onChange={this.onChange}
      value={this.state.date}
      />
      <h2> Add a New Student</h2>
      <CreateStudentContainer
      addNewStudent = {this.addNewStudent}
      />
      </div>
    )
  }
}

export default ClassroomContainer
