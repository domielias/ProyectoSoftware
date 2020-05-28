haw={
  "Lunes" => 1,
  "Martes"=> 2,
  "Miércoles"=> 3,
  "Jueves"=> 4,
  "Viernes"=> 5,
  "Sábado"=> 6,
}

box_colors={
  0 => '83B4B3',
  1 => '#A21A24',
  2 => '66B0E0',
  3 => 'EAC8A4',
  4 => 'F3BF2A',
  5 => '92623B',
}

text_colors={
  0 => 'black',
  1 => 'white',
  2 => 'black',
  3 => 'black',
  4 => 'black',
  5 => 'white',
}

@color_count = 0
current_user.persona.user.clases.joins(bloque: :ciclo).where(ciclos: {actual: true}).map{|clase| clase.horarios.where.not(dias: "")}.each do |horarios|
  json.array! horarios.each do |horario|
    json.title "Clave: #{horario.clase.asignatura.clave}\n Nombre: #{horario.clase.asignatura_nombre}"
    json.extract! horario.clase, :id, :no_clase, :asignatura_nombre
    json.start horario.start.strftime("%H:%M")
    json.end horario.end.strftime("%H:%M")
    json.color box_colors[@color_count]
    json.textColor text_colors[@color_count]
    # json.url mostrar_horario_actual_estudiante_url(horario.clase, format: :html)
    json.dow [haw[horario.dias].to_i]
  end
  @color_count += 1
end
