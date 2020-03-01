class Direccion < ApplicationRecord
    belongs_to :estudiante
    belongs_to :pai
    validates_presence_of :estudiante
end
