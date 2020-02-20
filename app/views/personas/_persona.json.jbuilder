json.extract! persona, :id, :lugar_nacimiento_persona_id, :residencia_persona_id, :nombres, :apellidos, :fecha_nacimiento, :puesto, :correo_electronico, :created_at, :updated_at
json.url persona_url(persona, format: :json)
