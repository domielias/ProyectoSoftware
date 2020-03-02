class Persona < ApplicationRecord
    has_one :usuario
    has_one :estudiante
end
