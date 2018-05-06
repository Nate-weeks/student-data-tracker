import React, {Component} from 'react';
import NewNote from '../components/NewNote';

class CreateNoteContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: '',
      title: '',
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
      title: this.state.title,
      note: this.state.note,
      date: this.props.date,
      student: this.props.student
    }
    this.props.createNote(formPayload)
  }

  render(){
    return(
      <div>
        <NewNote
        handleChange = {this.handleChange}
        note = {this.state.note}
        handleSubmit = {this.handleSubmit}
        />
      </div>
    )
  }
}

export default CreateNoteContainer
