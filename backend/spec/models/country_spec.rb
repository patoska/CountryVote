require "rails_helper"

RSpec.describe Country, type: :model do
  describe "associations" do
    it { is_expected.to have_many(:votes) }
  end

  describe "validations" do
    subject { create(:country) }

    it { is_expected.to validate_presence_of(:cca3) }
    it { is_expected.to validate_uniqueness_of(:cca3).case_insensitive }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:region) }
  end

  describe "factory" do
    it "is valid" do
      expect(build(:country)).to be_valid
    end
  end
end

