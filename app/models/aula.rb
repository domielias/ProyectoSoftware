class Aula < ApplicationRecord
  belongs_to :edificio
  belongs_to :horario
  has_many :tutories
end
