class Direccion < ApplicationRecord
    belongs_to :estudiante
    belongs_to :pai, optional: true
end
