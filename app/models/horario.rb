class Horario < ApplicationRecord
    belongs_to :clase, optional: true
    belongs_to :tutory, optional: true
end
