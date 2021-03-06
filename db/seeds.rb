# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

classrooms = Classroom.create([
  {name: "Daniel's Classroom"},
  {name: "Josh's Classroom"},
  {name: "Terri's Classroom"},
  {name: "Robyn's Classroom"}
  ])

students = Student.create([
  {name: "student1", classroom_id: 1},
  {name: "student2", classroom_id: 1}
  ])

notes = Note.create([
  {date: "Tue Apr 24 2018 00:00:00 GMT-0400 (EDT)", title: "poor behavior", note: "student1 was physically violent toward student 2 at 10am today", student_id: 1},
  {date: "Tue Apr 24 2018 00:00:00 GMT-0400 (EDT)", title: "good b ehavior", note: "student1 was great today!", student_id: 1}
  ])

daily_attendances = DailyAttendance.create([
  {date: "Tue Apr 24 2018 00:00:00 GMT-0400 (EDT)", attendance: "tardy", student_id: 1}
  ])
