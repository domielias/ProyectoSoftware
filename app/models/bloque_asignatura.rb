class BloqueAsignatura < ApplicationRecord
  belongs_to :bloque
  belongs_to :asignatura
end
