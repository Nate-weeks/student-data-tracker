class Api::V1::DailyAttendancesController < ApplicationController

  def create
    @classroom = Classroom.find(params['classroom_id'])
    @students = @classroom.students
    attendance = DailyAttendance.new
    attendance.attendance = params['attendance']['attendance']
    attendance.date = params['attendance']['date']
    attendance.student_id = params['attendance']['student']
    attendance.save
    render json: @students
  end

end
