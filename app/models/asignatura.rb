class Asignatura < ApplicationRecord
    has_many :clases
    belongs_to :facultad, optional: true
    has_and_belongs_to_many :prerrequisitos, :class_name => "asignatura", :foreign_key => "id", :association_foreign_key => "prerrequisito_id"
    has_and_belongs_to_many :correquisitos, :class_name => "asignatura", :foreign_key => "id", :association_foreign_key => "correquisito_id"
    has_and_belongs_to_many :bloques
    has_and_belongs_to_many :clases
end
