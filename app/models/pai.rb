class Pai < ApplicationRecord
    #has_and_belongs_to_many :personas
    has_many :persona_pais
    has_many :personas, through: :persona_pais
    has_many :direccions
end
