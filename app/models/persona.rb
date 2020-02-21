class Persona < ApplicationRecord
    belongs_to :pai
    has_many :persona_pais
    has_one :usuario
    has_one :estudiante
end
