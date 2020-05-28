# json.extract! horario, :id, :clase_id, :tutory_id, :start, :end, :created_at, :updated_at
# json.url horario_url(horario, format: :json)

json.array!(@horarios) do |horario|
  json.extract! horario, :id, :clase_id, :tutory_id, :start, :end
  json.start horario.start
  json.end horario.end
  json.url horario_url(horario, format: :html)
end
