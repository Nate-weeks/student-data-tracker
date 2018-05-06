class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note, :title

  belongs_to :student
end
