class Clase < ApplicationRecord
    has_many :horarios
    delegate :start, to: :horario, prefix: true
    delegate :end, to: :horario, prefix: true
    belongs_to :asignatura, optional: true ###########
    delegate :nombre, to: :asignatura, prefix: true
    has_many :tutory
    belongs_to :clase_vinculada, :class_name => "Clase", :foreign_key => "clase_vinculada_id", optional: true
    has_one :clase_vinculada, :class_name => "Clase"
    # belongs_to :clase_vinculada, :class_name => "Clase"

    belongs_to :temporada, optional: true
    delegate :nombre, to: :temporada, prefix: true
    belongs_to :profesor, :class_name => "Usuario", optional: true
    # delegate :nombre, to: :profesor, prefix: true
    has_many :evaluacions

    has_many :clase_estudiantes, dependent: :destroy
    has_many :estudiantes, through: :clase_estudiantes

    has_many :clase_actividads, dependent: :destroy
    has_many :actividads, through: :clase_actividads

    accepts_nested_attributes_for :clase_vinculada
    accepts_nested_attributes_for :horarios
    #accepts_nested_attributes_for :horarios, reject_if: proc { |attributes| attributes['dias'].blank? } # discretamente descartar los horarios si tienen el campo de dias vacio

end
