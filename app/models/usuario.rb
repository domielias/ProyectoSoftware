class Usuario < ApplicationRecord
  belongs_to :persona, optional: true
  belongs_to :rol
  has_many :tutories
  has_many :clases

  accepts_nested_attributes_for :rol

end
