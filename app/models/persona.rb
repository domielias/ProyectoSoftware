class Persona < ApplicationRecord
    belongs_to :pai, class_name: "pai", foreign_key: "lugar_nacimiento_persona_id"
    belongs_to :pai, class_name: "pai", foreign_key: "residencia_persona_id"

end
