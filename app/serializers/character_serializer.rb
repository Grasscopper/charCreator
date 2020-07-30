class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :stats
  has_many :locations
end
