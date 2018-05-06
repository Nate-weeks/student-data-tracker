class Api::V1::ClassroomsController < ApplicationController

  def index
    @classrooms = Classroom.all
    render json: @classrooms
  end

  def show
    @classroom = Classroom.find(params[:id])
    @students = @classroom.students
    render json: @students
  end

  def update
    @classroom = Classroom.find(params[:id])
    student = Student.new
    student.name = params['student']['name']
    student.classroom = @classroom
    student.save
    @students = @classroom.students
    render json: @students
  end

end
