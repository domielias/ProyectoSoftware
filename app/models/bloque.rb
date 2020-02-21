class Bloque < ApplicationRecord
  has_and_belongs_to_many :estudiantes
  belongs_to :category
  belongs_to :usuario
  has_and_belongs_to_many :asignaturas
  has_many :evaluacions
end
