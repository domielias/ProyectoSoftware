class Temporada < ApplicationRecord
  has_many :bloques
  has_many :clases
end
