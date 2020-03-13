class Clase < ApplicationRecord
    has_many :horarios
    belongs_to :asignatura, optional: true
    has_many :tutory
    has_one :clase_vinculada, :class_name => "Clase"
    # belongs_to :clase_vinculada, :class_name => "Clase"
    has_and_belongs_to_many :asignaturas
    belongs_to :temporada, optional: true
    # belongs_to :modalidad, optional: true
    belongs_to :profesor, :class_name => "Usuario", optional: true
    has_many :evaluacions
    has_and_belongs_to_many :estudiantes
    has_and_belongs_to_many :actividads

    accepts_nested_attributes_for :clase_vinculada

end