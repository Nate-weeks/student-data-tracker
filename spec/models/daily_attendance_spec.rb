require 'rails_helper'

RSpec.describe DailyAttendance, type: :model do
  it { should belong_to :student}

  it { should have_valid(:attendance).when('present', 'tardy', 'absent')}
  it { should_not have_valid(:attendance).when(nil, 'not present')}

  it { should have_valid(:date).when('1999-01-08')}
  it { should_not have_valid(:date).when(nil, 'january 1987')}

end
