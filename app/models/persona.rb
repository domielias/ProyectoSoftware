class Persona < ApplicationRecord
    has_one :user
    has_one :estudiante
    has_many :bloques
    before_save {self.correo_electronico=correo_electronico.downcase}
    #Validaciones
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    
    validates :nombres, presence: true, length: {maximum: 50}
    validates :apellidos, presence: true, length: {maximum: 50}
    validates :fecha_nacimiento, presence: true
    validates :correo_electronico, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}, format: { with: VALID_EMAIL_REGEX } 
    
    def id_campus_nombres_apellidos
      "#{id_campus} #{nombres} #{apellidos}"
    end

end
