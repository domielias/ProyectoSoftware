class Facultad < ApplicationRecord
    has_many :estudiante
    has_many :asignaturas
end
