class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :daily_attendances, :notes

  belongs_to :classroom

  private
  def daily_attendances
    DailyAttendaceSerializer.new(object.daily_attendances).attributes
  end

end
