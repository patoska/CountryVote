class Country < ApplicationRecord
  has_many :votes

  validates :cca3, presence: true, uniqueness: { case_sensitive: false }
  validates :name, presence: true
  validates :region, presence: true
end
