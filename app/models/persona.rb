class Persona < ApplicationRecord
    has_many :persona_pais
    has_one :usuario
    has_one :estudiante
end
