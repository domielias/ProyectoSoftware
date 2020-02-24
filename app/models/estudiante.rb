class Estudiante < ApplicationRecord
    belongs_to :facultad
    belongs_to :programa_internacional
    has_one :padre, :class_name => 'Persona'
    has_one :madre, :class_name => 'Persona'
    has_one :carrera_solicitada
    has_many :direccions
    has_one :examen_de_nivel
    has_one :informacion_academica
    has_one :progreso_inscripcion
    has_and_belongs_to_many :bloques
    has_and_belongs_to_many :clases
    belongs_to :persona

end
