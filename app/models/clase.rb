class Clase < ApplicationRecord
    has_many :horarios
    delegate :start, to: :horario, prefix: true
    delegate :end, to: :horario, prefix: true
    belongs_to :asignatura, optional: true ###########
    delegate :nombre, to: :asignatura, prefix: true
    delegate :clave, to: :asignatura, prefix: true
    has_many :tutories
    #belongs_to :correquisito, :class_name => "Clase", :foreign_key => "correquisito_id", optional: true
    #has_one :correquisito, :class_name => "Clase"
    # belongs_to :correquisito, :class_name => "Clase"

    belongs_to :bloque, optional: true

    belongs_to :ciclo, optional: true
    delegate :nombre, to: :ciclo, prefix: true

    belongs_to :profesor, :class_name => "User", optional: true
    # delegate :nombre, to: :profesor, prefix: true
    has_many :evaluacions

    has_many :clase_estudiantes, dependent: :destroy
    has_many :estudiantes, through: :clase_estudiantes
    accepts_nested_attributes_for :estudiantes

    has_many :clase_actividads, dependent: :destroy
    has_many :actividads, through: :clase_actividads

    #accepts_nested_attributes_for :correquisito
    accepts_nested_attributes_for :horarios, allow_destroy: true
    #accepts_nested_attributes_for :horarios, reject_if: proc { |attributes| attributes['dias'].blank? } # discretamente descartar los horarios si tienen el campo de dias vacio
end
