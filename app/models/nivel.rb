class Nivel < ApplicationRecord
    has_many :examen_de_nivels
    has_many :clases
    belongs_to :programa_epe_solicitado
    
    accepts_nested_attributes_for :programa_epe_solicitado

end
