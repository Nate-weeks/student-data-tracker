class Note < ApplicationRecord
  belongs_to :student

  validates :note, presence: true
end
