class Persona < ApplicationRecord
    has_one :user
    has_one :estudiante
end
