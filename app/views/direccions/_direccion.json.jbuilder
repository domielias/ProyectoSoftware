json.extract! direccion, :id, :telefono, :calle, :ciudad, :codigo_postal, :created_at, :updated_at
json.url direccion_url(direccion, format: :json)
