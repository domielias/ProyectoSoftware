json.extract! persona, :id, :nombres, :apellidos, :fecha_nacimiento, :puesto, :carrera, :correo_electronico, :created_at, :updated_at
json.url persona_url(persona, format: :json)
