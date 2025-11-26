FactoryBot.define do
  factory :country do
    sequence(:cca3) { |n| "CT#{n}" }
    sequence(:name) { |n| "Country #{n}" }
    region { "Americas" }
  end
end

