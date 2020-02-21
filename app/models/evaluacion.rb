class Evaluacion < ApplicationRecord
  belongs_to :bloque
  belongs_to :clase
  has_one :tipo_evaluacion
end
