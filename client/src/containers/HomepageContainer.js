import React, {Component} from 'react';
import ClassroomLink from '../components/ClassroomLink'

class HomepageContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      classroomArray: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/classrooms`, {
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
        this.setState({classroomArray: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    let classrooms = this.state.classroomArray.map(classroom => {
      return(
        <ClassroomLink
          key = {classroom.id}
          id = {classroom.id}
          name = {classroom.name}
          />
      )
    })

    return(
      <div>
        {classrooms}
      </div>
    )
  }
}

export default HomepageContainer
