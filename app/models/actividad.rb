class Actividad < ApplicationRecord
  belongs_to :usuario, optional: true

  has_many :clase_actividads, dependent: :destroy
  has_many :clases, through: :clase_actividads

end
