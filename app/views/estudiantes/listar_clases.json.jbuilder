haw={
  "Lunes" => 1,
  "Martes"=> 2,
  "Miércoles"=> 3,
  "Jueves"=> 4,
  "Viernes"=> 5,
  "Sábado"=> 6,
}
@estudiante.clases.map{|clase| clase.horarios.where.not(dias: "")}.each do |horarios|
  json.array! horarios.each do |horario|
    json.extract! horario.clase, :id, :no_clase, :asignatura_nombre
    json.start horario.start.strftime("%H:%M") 
    json.end horario.end.strftime("%H:%M")
    json.url listar_clases_estudiante_url(horario.clase, format: :html)
    json.dow [haw[horario.dias].to_i]
  end
end