class Institucion < ApplicationRecord
    has_many :programa_internacional
    has_many :estudiante, through :programa_internacional
end
