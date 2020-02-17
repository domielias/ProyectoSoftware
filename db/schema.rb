# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actividads", primary_key: ["IdCreador_Actividad", "IdClase_Actividad"], force: :cascade do |t|
    t.integer "IdCreador_Actividad", null: false
    t.integer "IdClase_Actividad", null: false
    t.datetime "FechaInicio"
    t.datetime "FechaFinal"
    t.string "Descripcion", limit: 80
    t.string "Ubicacion", limit: 30
    t.string "FormaDeTransporte", limit: 30
    t.boolean "DentroDeLaCiudad"
    t.index ["IdCreador_Actividad", "IdClase_Actividad"], name: "PK_FK_Actividad", unique: true
  end

  create_table "asignaturaBloques", primary_key: ["IdAsignatura_Bloque", "IdBloque_Asignatura"], force: :cascade do |t|
    t.integer "IdAsignatura_Bloque", null: false
    t.integer "IdBloque_Asignatura", null: false
    t.index ["IdAsignatura_Bloque", "IdBloque_Asignatura"], name: "PK_FK_AsignaturaBloque", unique: true
  end

  create_table "asignaturas", primary_key: "IdAsignatura", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdFacultad_Asignatura"
    t.integer "Prerrequisitos"
    t.integer "Correquisitos"
    t.integer "Clave"
    t.integer "ValorTeorico", limit: 2
    t.integer "ValorPractico", limit: 2
    t.integer "ValorCredito", limit: 2
    t.index ["IdAsignatura"], name: "PK_Asignatura", unique: true
    t.index ["IdFacultad_Asignatura", "Prerrequisitos", "Correquisitos"], name: "FK_Asignatura"
  end

  create_table "aulas", primary_key: "IdAula", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre"
    t.index ["IdAula"], name: "PK_Aula", unique: true
  end

  create_table "bloques", primary_key: "IdBloque", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdCategoria_Bloque"
    t.datetime "FechaInicio"
    t.datetime "FechaFinal"
    t.integer "idCreador"
    t.index ["IdBloque"], name: "PK_Bloque", unique: true
    t.index ["IdCategoria_Bloque"], name: "FK_Bloque"
  end

  create_table "carreraSolicitadas", primary_key: "IdCarreraSolicitada", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre", limit: 30
    t.index ["IdCarreraSolicitada"], name: "PK_CarreraSolicitada", unique: true
  end

  create_table "categorias", primary_key: "IdCategoria", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre", limit: 25
    t.index ["IdCategoria"], name: "PK_Categoria", unique: true
  end

  create_table "clases", primary_key: "IdClase", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdProfesor_Clase"
    t.integer "IdAsignatura_Clase"
    t.integer "IdTemporada_Clase"
    t.integer "Seccion"
    t.integer "IdAula"
    t.datetime "FechaInicio"
    t.datetime "FechaFinal"
    t.index ["IdClase"], name: "PK_Clase", unique: true
    t.index ["IdProfesor_Clase", "IdAsignatura_Clase", "IdTemporada_Clase"], name: "FK_Clase"
  end

  create_table "direccions", primary_key: ["IdEstudiante_Direccion", "IdPais_Direccion"], force: :cascade do |t|
    t.integer "IdEstudiante_Direccion", null: false
    t.string "CorreoElectronico", limit: 60
    t.string "Telefono", limit: 15
    t.string "Calle", limit: 100
    t.string "Ciudad", limit: 20
    t.string "CodigoPostal", limit: 7
    t.integer "IdPais_Direccion", null: false
    t.index ["IdEstudiante_Direccion", "IdPais_Direccion"], name: "PK_FK_Direccion", unique: true
  end

  create_table "estudianteBloques", primary_key: ["IdEstudiante_Bloque", "IdBloque_Estudiante"], force: :cascade do |t|
    t.integer "IdEstudiante_Bloque", null: false
    t.integer "IdBloque_Estudiante", null: false
    t.index ["IdEstudiante_Bloque", "IdBloque_Estudiante"], name: "PK_FK_EstudianteBloque", unique: true
  end

  create_table "estudianteClases", primary_key: ["IdEstudiante_Clase", "IdClase_Estudiante"], force: :cascade do |t|
    t.integer "IdEstudiante_Clase", null: false
    t.integer "IdClase_Estudiante", null: false
    t.index ["IdEstudiante_Clase", "IdClase_Estudiante"], name: "PK_FK_EstudianteClase", unique: true
  end

  create_table "estudiantes", primary_key: "IdEstudiante", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdFacultad_Estudiante"
    t.integer "IdPadre_Persona"
    t.integer "IdMadre_Persona"
    t.integer "IdCarreraSolicitada_Estudiante"
    t.integer "IdProgramaInternacional"
    t.string "Pasaporte", limit: 12
    t.float "TiempoResidencia"
    t.integer "NumeroResidencia"
    t.integer "IdCampus"
    t.integer "Matricula"
    t.string "EstadoCivil", limit: 10
    t.string "NombreConyugue", limit: 50
    t.string "Sexo", limit: 9
    t.boolean "Egresado"
    t.index ["IdEstudiante"], name: "PK_Estudiante", unique: true
    t.index ["IdFacultad_Estudiante", "IdPadre_Persona", "IdMadre_Persona", "IdCarreraSolicitada_Estudiante", "IdProgramaInternacional"], name: "FK_Estudiante"
  end

  create_table "evaluacions", primary_key: "IdEvaluacion", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdBloque_Evaluacion"
    t.integer "IdClase_Evaluacion"
    t.integer "IdTemporada_Evaluacion"
    t.float "Promedio"
    t.string "Tipo", limit: 20
    t.index ["IdBloque_Evaluacion", "IdClase_Evaluacion", "IdTemporada_Evaluacion"], name: "FK_Evaluacion"
    t.index ["IdEvaluacion"], name: "PK_Evaluacion", unique: true
  end

  create_table "examenDeNivels", primary_key: ["IdEstudiante_ExamenDeNivel", "IdNivel_ExamenDeNivel"], force: :cascade do |t|
    t.integer "IdEstudiante_ExamenDeNivel", null: false
    t.integer "IdNivel_ExamenDeNivel", null: false
    t.float "Promedio"
    t.index ["IdEstudiante_ExamenDeNivel"], name: "PK_FK_ExamenDeNivel", unique: true
    t.index ["IdNivel_ExamenDeNivel"], name: "FK_ExamenDeNivel"
  end

  create_table "facultads", primary_key: "IdFacultad", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre", limit: 25
    t.index ["IdFacultad"], name: "PK_Facultad", unique: true
  end

  create_table "horarios", primary_key: "IdHorario", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdClase"
    t.datetime "Inicio"
    t.datetime "Fin"
    t.integer "IdTutoria"
    t.index ["IdClase", "IdTutoria"], name: "FK_Tutoria"
    t.index ["IdHorario"], name: "PK_Horario", unique: true
  end

  create_table "informacionAcademicas", primary_key: "IdEstudiante_InformacionAcademica", id: :integer, default: nil, force: :cascade do |t|
    t.float "CantidadDeAñosdeEspañolEstudiadas"
    t.string "AsignaturasDeEspagnolRecientes", limit: 150
    t.float "CantidadDeHorasDeEspagnolCursadas"
    t.string "NivelDeLenguaAlcanzado", limit: 20
    t.index ["IdEstudiante_InformacionAcademica"], name: "PK_FK_IdEstudiante_InformacionAcademica", unique: true
  end

  create_table "nivels", primary_key: "IdNivel", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre", limit: 30
    t.float "RangoMin"
    t.float "RangoMax"
    t.index ["IdNivel"], name: "PK_Nivel", unique: true
  end

  create_table "pais", primary_key: "IdPais", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre", limit: 30
    t.string "Nacionalidad", limit: 30
    t.index ["IdPais"], name: "PK_Pais", unique: true
  end

  create_table "personas", primary_key: "IdPersona", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdLugarNacimiento_Persona"
    t.integer "IdNacionalidad_Persona"
    t.string "Nombre", limit: 30
    t.string "Apellidos", limit: 60
    t.date "FechaNacimiento"
    t.string "Puesto", limit: 25
    t.string "Carrera", limit: 25
    t.string "CorreoElectronico", limit: 60
    t.index ["IdLugarNacimiento_Persona", "IdNacionalidad_Persona"], name: "FK_Persona"
    t.index ["IdPersona"], name: "PK_Persona", unique: true
  end

  create_table "programaInternacionals", primary_key: "IdProgramaInternacional", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdPais_ProgramaInternacional"
    t.string "NombrePrograma", limit: 30
    t.string "Universidad", limit: 30
    t.index ["IdProgramaInternacional"], name: "PK_ProgramaInternacional", unique: true
  end

  create_table "progresoInscripcions", primary_key: "IdEstudiante_ProgresoInscripcion", id: :integer, default: nil, force: :cascade do |t|
    t.boolean "FormularioSolicitud"
    t.boolean "ActaNacimiento"
    t.boolean "CertificacionMedica"
    t.boolean "Fotografias"
    t.boolean "CopiaCedula"
    t.boolean "RecordSecundaria"
    t.boolean "CertificadoPruebasNacionales"
    t.boolean "ReciboAdmision"
    t.boolean "CopiaSeguroSalud"
    t.boolean "ActaNacimientoPadre"
    t.boolean "RecordNotasOriginalDeUnivDeProcedencia"
    t.boolean "CopiaVacunacion"
    t.index ["IdEstudiante_ProgresoInscripcion"], name: "PK_FK_ProgresoInscripcion", unique: true
  end

  create_table "rols", primary_key: "IdRol", id: :integer, default: nil, force: :cascade do |t|
    t.string "NombreRol", limit: 20
    t.index ["IdRol"], name: "PK_Rol", unique: true
  end

  create_table "temporadas", primary_key: "IdTemporada", id: :integer, default: nil, force: :cascade do |t|
    t.string "Nombre", limit: 20
    t.index ["IdTemporada"], name: "PK_Temporada", unique: true
  end

  create_table "tutorias", primary_key: "IdTutoria", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdProfesor_Tutoria"
    t.integer "IdClase_Tutoria"
    t.integer "IdAula"
    t.index ["IdAula"], name: "FK_Tutoria_Aula"
    t.index ["IdProfesor_Tutoria", "IdClase_Tutoria"], name: "FK_TutoriaClaseProfesor"
    t.index ["IdTutoria"], name: "PK_IdTutoria", unique: true
  end

  create_table "usuarios", primary_key: "IdPersona_Usuario", id: :integer, default: nil, force: :cascade do |t|
    t.integer "IdRol"
    t.string "NombreUsuario", limit: 20
    t.string "Contrasegna", limit: 50
    t.index ["IdPersona_Usuario"], name: "PK_FK_Usuario", unique: true
    t.index ["IdRol"], name: "FK_Usuario"
  end

  add_foreign_key "actividads", "clases", column: "IdClase_Actividad", primary_key: "IdClase", name: "Actividad_IdClase_Actividad_fkey"
  add_foreign_key "actividads", "usuarios", column: "IdCreador_Actividad", primary_key: "IdPersona_Usuario", name: "Actividad_IdCreador_Actividad_fkey"
  add_foreign_key "asignaturaBloques", "asignaturas", column: "IdAsignatura_Bloque", primary_key: "IdAsignatura", name: "AsignaturaBloque_IdAsignatura_Bloque_fkey"
  add_foreign_key "asignaturaBloques", "bloques", column: "IdBloque_Asignatura", primary_key: "IdBloque", name: "AsignaturaBloque_IdBloque_Asignatura_fkey"
  add_foreign_key "asignaturas", "asignaturas", column: "Correquisitos", primary_key: "IdAsignatura", name: "Asignatura_Correquisitos_fkey"
  add_foreign_key "asignaturas", "asignaturas", column: "Prerrequisitos", primary_key: "IdAsignatura", name: "Asignatura_Prerrequisitos_fkey"
  add_foreign_key "asignaturas", "facultads", column: "IdFacultad_Asignatura", primary_key: "IdFacultad", name: "Asignatura_IdFacultad_Asignatura_fkey"
  add_foreign_key "bloques", "categorias", column: "IdCategoria_Bloque", primary_key: "IdCategoria", name: "Bloque_IdCategoria_Bloque_fkey"
  add_foreign_key "bloques", "usuarios", column: "idCreador", primary_key: "IdPersona_Usuario", name: "Bloque_idCreador_fkey"
  add_foreign_key "clases", "asignaturas", column: "IdAsignatura_Clase", primary_key: "IdAsignatura", name: "Clase_IdAsignatura_Clase_fkey"
  add_foreign_key "clases", "aulas", column: "IdAula", primary_key: "IdAula", name: "Clase_IdAula_fkey"
  add_foreign_key "clases", "temporadas", column: "IdTemporada_Clase", primary_key: "IdTemporada", name: "Clase_IdTemporada_Clase_fkey"
  add_foreign_key "clases", "usuarios", column: "IdProfesor_Clase", primary_key: "IdPersona_Usuario", name: "Clase_IdProfesor_Clase_fkey"
  add_foreign_key "direccions", "estudiantes", column: "IdEstudiante_Direccion", primary_key: "IdEstudiante", name: "Direccion_IdEstudiante_Direccion_fkey"
  add_foreign_key "direccions", "pais", column: "IdPais_Direccion", primary_key: "IdPais", name: "Direccion_IdPais_Direccion_fkey"
  add_foreign_key "estudianteBloques", "bloques", column: "IdBloque_Estudiante", primary_key: "IdBloque", name: "EstudianteBloque_IdBloque_Estudiante_fkey"
  add_foreign_key "estudianteBloques", "estudiantes", column: "IdEstudiante_Bloque", primary_key: "IdEstudiante", name: "EstudianteBloque_IdEstudiante_Bloque_fkey"
  add_foreign_key "estudianteClases", "clases", column: "IdClase_Estudiante", primary_key: "IdClase", name: "EstudianteClase_IdClase_Estudiante_fkey"
  add_foreign_key "estudianteClases", "estudiantes", column: "IdEstudiante_Clase", primary_key: "IdEstudiante", name: "EstudianteClase_IdEstudiante_Clase_fkey"
  add_foreign_key "estudiantes", "\"carreraSolicitadas\"", column: "IdCarreraSolicitada_Estudiante", primary_key: "IdCarreraSolicitada", name: "Estudiante_IdCarreraSolicitada_Estudiante_fkey"
  add_foreign_key "estudiantes", "\"programaInternacionals\"", column: "IdProgramaInternacional", primary_key: "IdProgramaInternacional", name: "Estudiante_IdProgramaInternacional_fkey"
  add_foreign_key "estudiantes", "facultads", column: "IdFacultad_Estudiante", primary_key: "IdFacultad", name: "Estudiante_IdFacultad_Estudiante_fkey"
  add_foreign_key "estudiantes", "personas", column: "IdMadre_Persona", primary_key: "IdPersona", name: "Estudiante_IdMadre_Persona_fkey"
  add_foreign_key "estudiantes", "personas", column: "IdPadre_Persona", primary_key: "IdPersona", name: "Estudiante_IdPadre_Persona_fkey"
  add_foreign_key "evaluacions", "bloques", column: "IdBloque_Evaluacion", primary_key: "IdBloque", name: "Evaluacion_IdBloque_Evaluacion_fkey"
  add_foreign_key "evaluacions", "clases", column: "IdClase_Evaluacion", primary_key: "IdClase", name: "Evaluacion_IdClase_Evaluacion_fkey"
  add_foreign_key "evaluacions", "temporadas", column: "IdTemporada_Evaluacion", primary_key: "IdTemporada", name: "Evaluacion_IdTemporada_Evaluacion_fkey"
  add_foreign_key "examenDeNivels", "estudiantes", column: "IdEstudiante_ExamenDeNivel", primary_key: "IdEstudiante", name: "ExamenDeNivel_IdEstudiante_ExamenDeNivel_fkey"
  add_foreign_key "examenDeNivels", "nivels", column: "IdNivel_ExamenDeNivel", primary_key: "IdNivel", name: "ExamenDeNivel_IdNivel_ExamenDeNivel_fkey"
  add_foreign_key "horarios", "clases", column: "IdClase", primary_key: "IdClase", name: "Horario_IdClase_fkey"
  add_foreign_key "horarios", "tutorias", column: "IdTutoria", primary_key: "IdTutoria", name: "Horario_IdTutoria_fkey"
  add_foreign_key "informacionAcademicas", "estudiantes", column: "IdEstudiante_InformacionAcademica", primary_key: "IdEstudiante", name: "InformacionAcademica_IdEstudiante_InformacionAcademica_fkey"
  add_foreign_key "personas", "pais", column: "IdLugarNacimiento_Persona", primary_key: "IdPais", name: "Persona_IdLugarNacimiento_Persona_fkey"
  add_foreign_key "personas", "pais", column: "IdNacionalidad_Persona", primary_key: "IdPais", name: "Persona_IdNacionalidad_Persona_fkey"
  add_foreign_key "progresoInscripcions", "estudiantes", column: "IdEstudiante_ProgresoInscripcion", primary_key: "IdEstudiante", name: "ProgresoInscripcion_IdEstudiante_ProgresoInscripcion_fkey"
  add_foreign_key "tutorias", "aulas", column: "IdAula", primary_key: "IdAula", name: "Tutoria_IdAula_fkey"
  add_foreign_key "tutorias", "clases", column: "IdClase_Tutoria", primary_key: "IdClase", name: "Tutoria_IdClase_Tutoria_fkey"
  add_foreign_key "tutorias", "usuarios", column: "IdProfesor_Tutoria", primary_key: "IdPersona_Usuario", name: "Tutoria_IdProfesor_Tutoria_fkey"
  add_foreign_key "usuarios", "personas", column: "IdPersona_Usuario", primary_key: "IdPersona", name: "Usuario_IdPersona_Usuario_fkey"
  add_foreign_key "usuarios", "rols", column: "IdRol", primary_key: "IdRol", name: "Usuario_IdRol_fkey"
end
