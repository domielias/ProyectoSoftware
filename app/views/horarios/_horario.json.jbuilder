json.extract! horario, :id, :clase_id, :tutoria_id, :aula_id, :inicio, :fin, :created_at, :updated_at
json.url horario_url(horario, format: :json)
