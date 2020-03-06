class Aula < ApplicationRecord
  belongs_to :edificio
  has_many :tutories
  accepts_nested_attributes_for :edificio
end
