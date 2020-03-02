class Pai < ApplicationRecord
    #has_and_belongs_to_many :personas
    has_many :direccions
    has_many :programa_internacionals
end
