class Api::V1::NotesController < ApplicationController

  def create
    binding.pry
    @classroom = Classroom.find(params['classroom_id'])
    @students = @classroom.students
    note = Note.new
    note.title = params['note']['title']
    note.note = params['note']['note']
    note.student_id = params['note']['student']
    note.date = params['note']['date']
    note.save
    render json: @students
  end
end
