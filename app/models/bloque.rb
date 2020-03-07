class Bloque < ApplicationRecord
  has_and_belongs_to_many :estudiantes
  belongs_to :category
  belongs_to :creador, :class_name => "Usuario"
  belongs_to :temporada
  has_and_belongs_to_many :asignaturas
  has_many :evaluacions
end
