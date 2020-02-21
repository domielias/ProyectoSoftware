class Usuario < ApplicationRecord
  belongs_to :persona
  has_one :rol
  has_many :tutories
  has_many :clases
end
