class Estudiante < ApplicationRecord

    belongs_to :facultad, optional: true
    belongs_to :programa_internacional, optional: true
    belongs_to :carrera_solicitada, optional: true
    belongs_to :padre, :class_name => 'Persona', optional: true
    belongs_to :madre, :class_name => 'Persona', optional: true
    has_many :direccions
    has_one :examen_de_nivel
    has_one :informacion_academica
    has_one :progreso_inscripcion
    has_and_belongs_to_many :bloques
    has_and_belongs_to_many :clases
    belongs_to :persona, optional: true

    accepts_nested_attributes_for :facultad
    accepts_nested_attributes_for :programa_internacional
    accepts_nested_attributes_for :carrera_solicitada
    accepts_nested_attributes_for :padre
    accepts_nested_attributes_for :madre
    accepts_nested_attributes_for :direccions
    accepts_nested_attributes_for :examen_de_nivel
    accepts_nested_attributes_for :informacion_academica
    accepts_nested_attributes_for :progreso_inscripcion
    # accepts_nested_attributes_for :bloques
    # accepts_nested_attributes_for :clases
    accepts_nested_attributes_for :persona

end