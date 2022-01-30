class Direccion < ApplicationRecord
    belongs_to :estudiante
    belongs_to :pai, optional: true

    validates :telefono, presence: true,length: {maximum:15}
    validates :direccion_completa, presence: true,length: {maximum: 40}
    validates :ciudad, presence: true,length: {maximum: 85}
    validates :codigo_postal, presence: true,length: {maximum: 15}
    
    # Las direcciones serán ordenadas por id en el form de editar estudiante
    default_scope { order(:id) }

end
