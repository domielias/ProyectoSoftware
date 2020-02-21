class Horario < ApplicationRecord
    belongs_to :clase
    has_one :aula
    belongs_to :tutory
end
