class Classrooms::ShowSerializer < ClassroomSerializer
  attributes :id, :name, :students
  binding.pry
  private
  def students
    StudentSerializer.new(object.students).attributes
  end

end
