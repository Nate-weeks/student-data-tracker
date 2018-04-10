require 'rails_helper'

RSpec.describe Classroom, type: :model do
  it {should have_valid(:name).when('testclassroom')}
  it {should_not have_valid(:name).when(nil, '')}
end
