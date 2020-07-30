class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating
  belongs_to :character
end
