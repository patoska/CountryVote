FactoryBot.define do
  factory :vote do
    sequence(:name) { |n| "Person #{n}" }
    sequence(:email) { |n| "person#{n}@example.com" }
    association :country
  end
end

