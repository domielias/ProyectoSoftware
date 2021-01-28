class Direccion < ApplicationRecord
    belongs_to :estudiante
    # Las direcciones serán ordenadas por id en el form de editar estudiante
    default_scope { order(:id) }
    belongs_to :pai, optional: true
    #Validacion de campo
end
