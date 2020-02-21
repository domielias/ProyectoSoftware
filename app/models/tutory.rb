class Tutory < ApplicationRecord
    has_many :horarios
    belongs_to :clase
    belongs_to :aula
    belongs_to :usuario
end
