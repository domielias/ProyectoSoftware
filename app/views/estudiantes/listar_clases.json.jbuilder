json.array!(@estudiante.clases) do |clase|
  json.extract! clase, :id, :no_clase, :asignatura_nombre
  json.start clase.horarios.first.start.strftime("%H:%M")
  json.end clase.horarios.first.end.strftime("%H:%M")
  json.dow [1, 4]
  json.url listar_clases_estudiante_url(clase, format: :html)
end
