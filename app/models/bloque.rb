class Bloque < ApplicationRecord

  belongs_to :category, optional: true
  delegate :nombre, to: :category, prefix: true
  belongs_to :ciclo, optional: true
  delegate :nombre, to: :ciclo, prefix: true
  has_many :evaluacions

  has_many :bloque_asignaturas, dependent: :destroy
  has_many :asignaturas, through: :bloque_asignaturas

  has_many :bloque_estudiantes, dependent: :destroy
  has_many :estudiantes, through: :bloque_estudiantes

  belongs_to :clase_padre, :class_name => "Clase", :foreign_key => "clase_padre_id", optional: true
  has_many :clases, :class_name => "Clase"

  accepts_nested_attributes_for :category
  accepts_nested_attributes_for :ciclo

end
