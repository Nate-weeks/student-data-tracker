class Api::V1::ClassroomsController < ApplicationController
  def index
    @classrooms = [Classroom.all, Student.all, Note.all, DailyAttendance.all]
    render json: @classrooms
  end
end
