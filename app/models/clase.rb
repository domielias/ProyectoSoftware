class Clase < ApplicationRecord
    has_many :horarios
    has_one :tutory
    has_one :clase_vinculada, :class_name => "Clase", :foreign_key => "clase_vinculada_id"
    belongs_to :usuario # hacer relaciones con persona
    has_and_belongs_to_many :asignaturas
    belongs_to :temporada
    belongs_to :aula
    belongs_to :modalidad
    belongs_to :usuario
    has_many :evaluacions
    has_and_belongs_to_many :estudiantes
    has_and_belongs_to_many :actividads
end