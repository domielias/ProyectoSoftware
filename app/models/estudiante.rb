class Estudiante < ApplicationRecord
    belongs_to :facultad
    belongs_to :programa_internacional
    has_one :padre, :class_name => "Persona". :foreign_key => "padre_id"
    has_one :madre, :class_name => "Persona". :foreign_key => "madre_id"
    has_one :carrera_solicitada
    has_many :direccion
    has_one :universidad, through :programa_internacional
    has_one :examen_de_nivel
    has_one :informacion_academica
    has_one :progreso_inscripcion

end
