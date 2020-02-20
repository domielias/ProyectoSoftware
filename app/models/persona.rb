class Persona < ApplicationRecord
  has_one :Pai, class_name: "PersonaPai", foreign_key: "pais_persona_id"
  has_one :Pai, class_name: "PersonaPai", foreign_key:"pais_persona_id"
end
