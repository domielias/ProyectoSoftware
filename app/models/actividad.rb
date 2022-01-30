class Actividad < ApplicationRecord
  belongs_to :user, optional: true

  validates :fecha, presence: true
  validates :nombre_de_la_actividad, presence: true

  has_many :clase_actividads, dependent: :destroy
  has_many :clases, through: :clase_actividads

end
