class Bloque < ApplicationRecord
  belongs_to :category, optional: true
  belongs_to :creador,optional: true ,:class_name => "Usuario", optional: true
  belongs_to :temporada, optional: true
  has_many :evaluacions

  has_many :bloque_asignaturas, dependent: :destroy
  has_many :asignaturas, through: :bloque_asignaturas

  has_many :bloque_estudiantes, dependent: :destroy
  has_many :estudiantes, through: :bloque_estudiantes

  accepts_nested_attributes_for :category
  accepts_nested_attributes_for :temporada

end
