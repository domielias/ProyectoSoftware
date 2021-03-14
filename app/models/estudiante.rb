  class Estudiante < ApplicationRecord

    belongs_to :programa_internacional, optional: true
    belongs_to :carrera_solicitada, optional: true
    belongs_to :padre, :class_name => 'Persona', optional: true, :validate => false
    belongs_to :madre, :class_name => 'Persona', optional: true, :validate => false
    has_many :direccions
    has_one :examen_de_nivel
    has_one :informacion_academica
    has_one :progreso_inscripcion
    belongs_to :persona, optional: true
    belongs_to :institucion, optional: true
    belongs_to :programa_epe_solicitado, optional: true
    has_many :clase_estudiantes, dependent: :destroy
    has_many :clases, through: :clase_estudiantes

    has_many :bloque_estudiantes, dependent: :destroy
    has_many :bloques, through: :bloque_estudiantes


    accepts_nested_attributes_for :programa_internacional
    accepts_nested_attributes_for :carrera_solicitada
    accepts_nested_attributes_for :padre
    accepts_nested_attributes_for :madre
    accepts_nested_attributes_for :direccions
    accepts_nested_attributes_for :examen_de_nivel
    accepts_nested_attributes_for :informacion_academica
    accepts_nested_attributes_for :progreso_inscripcion
    # accepts_nested_attributes_for :bloques
    # accepts_nested_attributes_for :clases
    accepts_nested_attributes_for :persona

    #validaciones
    validates :pasaporte, presence: true

    validates :programa_epe_solicitado, presence: true
    validates :examen_de_nivel, presence: true
    # validates :madre, presence: true
    # validates :padre, presence: true
    # validates :sexo, presence: true

    def id_campus_nombres_apellidos
      "#{persona.id_campus} #{persona.nombres} #{persona.apellidos}"
    end

end
