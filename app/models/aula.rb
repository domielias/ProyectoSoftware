class Aula < ApplicationRecord
  belongs_to :edificio
  has_many :tutories
end
