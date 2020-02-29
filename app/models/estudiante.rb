class Estudiante < ApplicationRecord
    belongs_to :facultad
    belongs_to :programa_internacional
    belongs_to :carrera_solicitada
    has_one :padre, :class_name => 'Persona'
    has_one :madre, :class_name => 'Persona'
    has_many :direccions
    has_one :examen_de_nivel
    has_one :informacion_academica
    has_one :progreso_inscripcion
    has_and_belongs_to_many :bloques
    has_and_belongs_to_many :clases
    belongs_to :persona

    accepts_nested_attributes_for :facultad
    accepts_nested_attributes_for :programa_internacional
    accepts_nested_attributes_for :carrera_solicitada
    accepts_nested_attributes_for :padre
    accepts_nested_attributes_for :madre
    accepts_nested_attributes_for :direccions
    accepts_nested_attributes_for :examen_de_nivel
    accepts_nested_attributes_for :informacion_academica
    accepts_nested_attributes_for :progreso_inscripcion
    accepts_nested_attributes_for :bloques
    accepts_nested_attributes_for :clases
    accepts_nested_attributes_for :persona

end
