class Tutory < ApplicationRecord
    has_many :horarios
    belongs_to :clase
    belongs_to :profesor, :class_name => "Usuario"
end
