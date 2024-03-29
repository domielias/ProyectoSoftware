class Asignatura < ApplicationRecord
    has_many :clases
    belongs_to :facultad, optional: true
    has_and_belongs_to_many :prerrequisitos, :class_name => "asignatura", :foreign_key => "id", :association_foreign_key => "prerrequisito_id"
    has_and_belongs_to_many :correquisitos, :class_name => "asignatura", :foreign_key => "id", :association_foreign_key => "correquisito_id"
    has_and_belongs_to_many :clases

    has_many :bloque_asignaturas, dependent: :destroy
    has_many :bloques, through: :bloque_asignaturas

    def clave_nombre
      "#{clave} #{nombre}"
    end

end
