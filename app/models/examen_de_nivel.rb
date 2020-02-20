class ExamenDeNivel < ApplicationRecord
    belongs_to :estudiante
    belongs_to :nivel
end
