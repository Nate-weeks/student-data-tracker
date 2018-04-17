class Api::V1::ClassroomsController < ApplicationController

  def index
    classrooms = Classroom.all
    render json: {
      classrooms: classrooms
      }
  end

  def show
    classroom = Classroom.find(params[:id])
    students = classroom.students
    render json: {
      classroom: classroom,
      students: students
    }
  end
end
