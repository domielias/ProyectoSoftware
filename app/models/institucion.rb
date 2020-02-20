class Institucion < ApplicationRecord
    has_many :programa_internacionals
    has_many :estudiantes, through :programa_internacional
end
