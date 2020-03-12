class Direccion < ApplicationRecord
    belongs_to :estudiante
    belongs_to :pai
end
