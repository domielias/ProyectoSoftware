  class Estudiante < ApplicationRecord
    belongs_to :programa_internacional, optional: true
    belongs_to :carrera_solicitada, optional: true
    belongs_to :padre, :class_name => 'Persona', optional: true, :validate => false
    belongs_to :madre, :class_name => 'Persona', optional: true, :validate => false
    belongs_to :persona, optional: true
    belongs_to :institucion, optional: true
    belongs_to :programa_epe_solicitado, optional: true
    has_one :progreso_inscripcion
    has_one :informacion_academica
    has_one :examen_de_nivel
    has_many :direccions
    has_many :clase_estudiantes, dependent: :destroy
    has_many :clases, through: :clase_estudiantes
    has_many :bloque_estudiantes, dependent: :destroy
    has_many :bloques, through: :bloque_estudiantes

    # Validaciones
    validates :pasaporte, presence: true, length: { maximum:12}
    validates :estado_civil, presence: true, length: { maximum: 15}
    validates :sexo, presence: true, length: {maximum: 9}


    # Esta validación no tiene efectio en /ficha_de_solicitud_estudiante
    # validates :programa_epe_solicitado, presence: true
    # La comente para probar
    # validates :examen_de_nivel, presence: true 


    accepts_nested_attributes_for :programa_internacional
    accepts_nested_attributes_for :carrera_solicitada
    accepts_nested_attributes_for :padre
    accepts_nested_attributes_for :madre
    accepts_nested_attributes_for :direccions
    accepts_nested_attributes_for :examen_de_nivel
    accepts_nested_attributes_for :informacion_academica
    accepts_nested_attributes_for :progreso_inscripcion
    accepts_nested_attributes_for :persona
    # accepts_nested_attributes_for :bloques
    # accepts_nested_attributes_for :clases

    def id_campus_nombres_apellidos
      "#{persona.id_campus} #{persona.nombres} #{persona.apellidos}"
    end

end
