require 'rails_helper'

RSpec.describe Note, type: :model do
  it { should belong_to :student}

  it {should have_valid(:note).when('test note')}
  it {should_not have_valid(:note).when(nil, '')}
end
