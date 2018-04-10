class Student < ApplicationRecord
  belongs_to :classroom
  has_many :notes
  has_many :daily_attendances

  validates :name, presence: true
end
