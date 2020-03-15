class ExamenDeNivel < ApplicationRecord
    belongs_to :estudiante
    belongs_to :nivel, optional: true
end
