class Persona < ApplicationRecord
    has_one :user
    has_one :estudiante
    has_many :bloques
    #Validaciones
    validates :nombres, presence: true
    validates :apellidos, presence: true
    # validates :fecha_nacimiento, presence: true
    def id_campus_nombres_apellidos
      "#{id_campus} #{nombres} #{apellidos}"
    end

end
