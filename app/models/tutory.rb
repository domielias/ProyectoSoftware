class Tutory < ApplicationRecord
    has_many :horarios, :dependent => :destroy
    belongs_to :clase, optional: true
    # belongs_to :profesor, :class_name => "Usuario"

    belongs_to :user, optional: true
    accepts_nested_attributes_for :horarios, allow_destroy: true

    #Validations 
    validates :ubicacion, presence: true
    validates :user, presence: true
    validates :clase, presence: true
    validates :horarios, presence: true
end
