class Clase < ApplicationRecord
    has_one :clase_vinculada, :class_name => "Clase", :foreign_key => "clase_vinculada_id"
    belongs_to :usuario # hacer relaciones con persona
    belongs_to :asignatura
    belongs_to :temporada
    belongs_to :aula
    belongs_to :modalidad
end