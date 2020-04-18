class Nivel < ApplicationRecord
    has_many :examen_de_nivels
    has_many :clases
    has_many :bloques
end
