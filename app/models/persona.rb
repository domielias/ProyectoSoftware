class Persona < ApplicationRecord
  has_one :Pai, class_name: "Pai", foreign_key: "lugar_nacimiento_persona_id"
  has_one :Pai, class_name: "Pai", foreign_key: "residencia_persona_id"
end
