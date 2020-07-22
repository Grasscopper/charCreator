class Location < ApplicationRecord
  belongs_to :character
  validates :name, presence: true
end
