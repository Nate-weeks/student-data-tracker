import React, {Component} from 'react';
import CreateStudent from '../components/CreateStudent';

class CreateStudentContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      name: this.state.name
    }
    this.props.addNewStudent(formPayload)
  }

  render(){
    return(
      <div>
        <CreateStudent
        handleChange = {this.handleChange}
        name = {this.state.name}
        handleSubmit = {this.handleSubmit}
        />
      </div>
    )
  }

}

export default CreateStudentContainer;
