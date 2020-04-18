class ProgramaEpeSolicitado < ApplicationRecord

  has_many :estudiantes
  has_many :bloques

end
