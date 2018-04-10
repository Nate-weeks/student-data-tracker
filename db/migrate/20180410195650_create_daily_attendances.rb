class CreateDailyAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_attendances do |t|
      t.date :date, null: false
      t.string :attendance, null:false
      t.references :student, foreign_key: true, null: false

      t.timestamps
    end
  end
end
