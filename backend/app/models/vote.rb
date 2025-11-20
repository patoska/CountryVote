class Vote < ApplicationRecord
  belongs_to :country

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :country, presence: true
end
