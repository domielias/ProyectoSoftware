json.extract! asignatura, :id, :nombre,:clave, :valor_teorico, :valor_practico, :valor_credito, :created_at, :updated_at
json.url asignatura_url(asignatura, format: :json)
