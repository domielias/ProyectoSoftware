class Institucion < ApplicationRecord
    has_and_belongs_to_many :programa_internacionals
end
