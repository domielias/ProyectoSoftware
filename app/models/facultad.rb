class Facultad < ApplicationRecord
    has_many :estudiantes
    has_many :asignaturas
end
