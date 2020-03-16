class Bloque < ApplicationRecord
  has_and_belongs_to_many :estudiantes, foreign_key: 'estudiante_id',optional: true
  belongs_to :category
  belongs_to :creador,optional: true ,:class_name => "Usuario"
  belongs_to :temporada
  has_and_belongs_to_many :asignaturas
  has_many :evaluacions

  accepts_nested_attributes_for :category
  accepts_nested_attributes_for :temporada

end