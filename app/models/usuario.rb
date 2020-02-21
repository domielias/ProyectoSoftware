class Usuario < ApplicationRecord
  belongs_to :persona
  has_one :rol
end
