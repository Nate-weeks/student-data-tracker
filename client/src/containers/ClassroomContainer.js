import React, {Component} from 'react';
import ClassroomTile from '../components/ClassroomTile'

class ClassroomContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: [],
      classroom: []
    }
  }

  componentDidMount() {
    let classroom_id = this.props.match.params["classroom_id"]
    fetch(`http://localhost:3000/api/v1/classrooms/${classroom_id}`, {
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
      .then(body => {
        this.setState({
          students: body.students,
          classroom: body.classroom
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    return(
      <div>
        <ClassroomTile
          students = {this.state.students}
          classroom = {this.state.classroom.name}
        />
      </div>
    )
  }
}

export default ClassroomContainer
