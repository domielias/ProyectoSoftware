class ProgramaEpeSolicitado < ApplicationRecord
  has_many :estudiantes
  has_many :nivels
  has_many :bloques
  
end
