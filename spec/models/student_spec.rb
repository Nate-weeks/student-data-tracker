require 'rails_helper'

RSpec.describe Student, type: :model do
  it { should belong_to :classroom}

  it {should have_valid(:name).when('testname')}
  it {should_not have_valid(:name).when(nil, '')}

end
