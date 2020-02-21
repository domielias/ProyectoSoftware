json.extract! evaluacion, :id, :promedio, :created_at, :updated_at
json.url evaluacion_url(evaluacion, format: :json)
