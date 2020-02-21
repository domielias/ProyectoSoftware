json.extract! actividad, :id, :fecha_inicio, :fecha_final, :descripcion, :ubicacion, :forma_de_transporte, :dentro_de_la_ciudad, :created_at, :updated_at
json.url actividad_url(actividad, format: :json)
