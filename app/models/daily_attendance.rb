class DailyAttendance < ApplicationRecord
  belongs_to :student

  validates :date, presence: true
  validates :attendance, presence: true, inclusion: { in: ['present', 'tardy', 'absent']}
end
