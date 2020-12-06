class Ciclo < ApplicationRecord
  has_many :bloques
  has_many :clases, through: :bloques
end
