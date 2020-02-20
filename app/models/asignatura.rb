class Asignatura < ApplicationRecord
    has_many :clases
    has_and_belongs_to_many :prerrequisitos, :class_name => "Asignatura", :foreign_key => "asignatura_id", :association_foreign_key => "prerrequisito_id"
    has_and_belongs_to_many :correquisitos, :class_name => "Asignatura", :foreign_key => "asignatura_id", :association_foreign_key => "correquisito_id"
end
