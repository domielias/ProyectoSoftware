class ClaseEstudiante < ApplicationRecord
  belongs_to :clase
  belongs_to :estudiante

end
