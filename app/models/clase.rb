class Clase < ApplicationRecord
    has_many :horarios
    belongs_to :asignatura
    has_many :tutory
    has_one :clase_vinculada, :class_name => "Clase"
    has_and_belongs_to_many :asignaturas
    belongs_to :temporada
    belongs_to :modalidad
    belongs_to :profesor, :class_name => "Usuario"
    has_many :evaluacions
    has_and_belongs_to_many :estudiantes
    has_and_belongs_to_many :actividads
end