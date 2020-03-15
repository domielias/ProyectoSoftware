class ClaseEstudiante < ApplicationRecord
  attr_accessible :clase_id, :estudiante_id

  belongs_to :clase
  belongs_to :estudiante

end
