import React, {Component} from 'react';
import DailyAttendanceForm from '../components/DailyAttendanceForm';

class CreateAttendanceContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedOption: 'present',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      selectedOption: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      attendance: this.state.selectedOption,
      date: this.props.date,
      student: this.props.student
    }
    this.props.dailyAttendance(formPayload)
  }

  render(){console.log(this.state.selectedOption)
    return(
      <div>
        <DailyAttendanceForm
        handleChange = {this.handleChange}
        checked = {this.state.selectedOption}
        handleSubmit = {this.handleSubmit}
        />
      </div>
      )
  }
}

export default CreateAttendanceContainer
