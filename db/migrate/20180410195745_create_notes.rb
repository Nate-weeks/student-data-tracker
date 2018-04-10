class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :note, null: false
      t.string :title
      t.references :student, foreign_key: true, null: false

      t.timestamps
    end
  end
end
