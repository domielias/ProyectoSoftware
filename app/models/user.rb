class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

   has_many :clases, foreign_key: 'profesor_id'
   belongs_to :persona
   accepts_nested_attributes_for :persona

   def persona
     super || build_persona
   end

   def id_campus_nombres_apellidos
     "#{persona.id_campus} #{persona.nombres} #{persona.apellidos}"
   end

end
