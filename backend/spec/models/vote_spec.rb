require "rails_helper"

RSpec.describe Vote, type: :model do
  describe "associations" do
    it { is_expected.to belong_to(:country) }
  end

  describe "validations" do
    subject { create(:vote) } # enables uniqueness test

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:country) }
  end

  describe "factory" do
    it "is valid" do
      expect(build(:vote)).to be_valid
    end
  end
end

