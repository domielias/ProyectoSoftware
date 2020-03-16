class BloqueEstudiante < ApplicationRecord
  belongs_to :bloque
  belongs_to :estudiante
end
