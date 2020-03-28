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

ActiveRecord::Schema.define(version: 34) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "btree_gin"
  enable_extension "btree_gist"
  enable_extension "citext"
  enable_extension "cube"
  enable_extension "dblink"
  enable_extension "dict_int"
  enable_extension "dict_xsyn"
  enable_extension "earthdistance"
  enable_extension "fuzzystrmatch"
  enable_extension "hstore"
  enable_extension "intarray"
  enable_extension "ltree"
  enable_extension "pg_stat_statements"
  enable_extension "pg_trgm"
  enable_extension "pgcrypto"
  enable_extension "pgrowlocks"
  enable_extension "pgstattuple"
  enable_extension "plpgsql"
  enable_extension "tablefunc"
  enable_extension "unaccent"
  enable_extension "uuid-ossp"
  enable_extension "xml2"

  create_table "actividads", force: :cascade do |t|
    t.datetime "fecha"
    t.datetime "hora_inicio"
    t.datetime "hora_fin"
    t.string "descripcion", limit: 80
    t.string "ubicacion", limit: 30
    t.string "forma_de_transporte", limit: 30
    t.boolean "dentro_de_la_ciudad"
    t.bigint "usuario_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_actividads_on_id", unique: true
    t.index ["usuario_id"], name: "index_actividads_on_usuario_id"
  end

  create_table "asignaturas", force: :cascade do |t|
    t.string "nombre", limit: 100
    t.integer "clave"
    t.integer "valor_teorico"
    t.integer "valor_practico"
    t.integer "valor_credito"
    t.boolean "activo"
    t.bigint "facultad_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["facultad_id"], name: "index_asignaturas_on_facultad_id"
    t.index ["id"], name: "index_asignaturas_on_id", unique: true
  end

  create_table "bloque_asignaturas", force: :cascade do |t|
    t.integer "bloque_id", null: false
    t.integer "asignatura_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bloque_estudiantes", force: :cascade do |t|
    t.integer "bloque_id", null: false
    t.integer "estudiante_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bloques", force: :cascade do |t|
    t.string "nombre", limit: 20
    t.bigint "category_id"
    t.bigint "creador_usuario_id"
    t.bigint "creador_estudiante_id"
    t.bigint "bloque_padre_id"
    t.bigint "temporada_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bloque_padre_id"], name: "index_bloques_on_bloque_padre_id"
    t.index ["category_id"], name: "index_bloques_on_category_id"
    t.index ["creador_estudiante_id"], name: "index_bloques_on_creador_estudiante_id"
    t.index ["creador_usuario_id"], name: "index_bloques_on_creador_usuario_id"
    t.index ["id"], name: "index_bloques_on_id", unique: true
    t.index ["temporada_id"], name: "index_bloques_on_temporada_id"
  end

  create_table "carrera_solicitadas", force: :cascade do |t|
    t.string "nombre", limit: 50
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_carrera_solicitadas_on_id", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "nombre", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_categories_on_id", unique: true
  end

  create_table "clase_actividads", force: :cascade do |t|
    t.integer "clase_id", null: false
    t.integer "actividad_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clase_estudiantes", force: :cascade do |t|
    t.integer "clase_id", null: false
    t.integer "estudiante_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clases", force: :cascade do |t|
    t.integer "seccion"
    t.integer "no_clase"
    t.string "lugar", limit: 20
    t.string "modalidad", limit: 20
    t.bigint "profesor_id"
    t.bigint "asignatura_id"
    t.bigint "temporada_id"
    t.bigint "clase_vinculada_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["asignatura_id"], name: "index_clases_on_asignatura_id"
    t.index ["clase_vinculada_id"], name: "index_clases_on_clase_vinculada_id"
    t.index ["id"], name: "index_clases_on_id", unique: true
    t.index ["profesor_id"], name: "index_clases_on_profesor_id"
    t.index ["temporada_id"], name: "index_clases_on_temporada_id"
  end

  create_table "direccions", force: :cascade do |t|
    t.boolean "pais_nacimiento"
    t.string "telefono", limit: 20
    t.string "calle", limit: 40
    t.string "ciudad", limit: 30
    t.string "codigo_postal", limit: 15
    t.bigint "estudiante_id"
    t.bigint "pai_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["estudiante_id", "pai_id"], name: "index_direccions_on_estudiante_id_and_pai_id", unique: true
    t.index ["estudiante_id"], name: "index_direccions_on_estudiante_id"
    t.index ["id"], name: "index_direccions_on_id", unique: true
    t.index ["pai_id"], name: "index_direccions_on_pai_id"
  end

  create_table "estudiantes", force: :cascade do |t|
    t.string "pasaporte", limit: 12
    t.float "tiempo_residencia"
    t.integer "numero_residencia"
    t.integer "id_campus"
    t.integer "matricula"
    t.string "estado_civil", limit: 15
    t.string "nombre_conyugue", limit: 50
    t.string "sexo", limit: 9
    t.boolean "egresado"
    t.boolean "admitido"
    t.bigint "padre_id"
    t.bigint "madre_id"
    t.bigint "carrera_solicitada_id"
    t.bigint "programa_internacional_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "persona_id"
    t.index ["carrera_solicitada_id"], name: "index_estudiantes_on_carrera_solicitada_id"
    t.index ["id"], name: "index_estudiantes_on_id", unique: true
    t.index ["madre_id"], name: "index_estudiantes_on_madre_id"
    t.index ["padre_id"], name: "index_estudiantes_on_padre_id"
    t.index ["persona_id"], name: "index_estudiantes_on_persona_id"
    t.index ["programa_internacional_id"], name: "index_estudiantes_on_programa_internacional_id"
  end

  create_table "evaluacions", force: :cascade do |t|
    t.float "promedio"
    t.bigint "clase_id"
    t.bigint "bloque_id"
    t.bigint "tipo_evaluacion_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bloque_id"], name: "index_evaluacions_on_bloque_id"
    t.index ["clase_id"], name: "index_evaluacions_on_clase_id"
    t.index ["id"], name: "index_evaluacions_on_id", unique: true
    t.index ["tipo_evaluacion_id"], name: "index_evaluacions_on_tipo_evaluacion_id"
  end

  create_table "examen_de_nivels", force: :cascade do |t|
    t.float "promedio"
    t.bigint "estudiante_id"
    t.bigint "nivel_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["estudiante_id"], name: "index_examen_de_nivels_on_estudiante_id"
    t.index ["id"], name: "index_examen_de_nivels_on_id", unique: true
    t.index ["nivel_id"], name: "index_examen_de_nivels_on_nivel_id"
  end

  create_table "facultads", force: :cascade do |t|
    t.string "nombre", limit: 40
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_facultads_on_id", unique: true
  end

  create_table "horarios", force: :cascade do |t|
    t.bigint "clase_id"
    t.bigint "tutory_id"
    t.string "dias", limit: 50
    t.datetime "inicio"
    t.datetime "fin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["clase_id"], name: "index_horarios_on_clase_id"
    t.index ["id"], name: "index_horarios_on_id", unique: true
    t.index ["tutory_id"], name: "index_horarios_on_tutory_id"
  end

  create_table "informacion_academicas", force: :cascade do |t|
    t.float "cantidad_de_anos_de_espanol_estudiadas"
    t.string "asignaturas_de_espanol_recientes", limit: 150
    t.float "cantidad_de_horas_de_espanol_cursadas"
    t.string "nivel_alcanzado", limit: 20
    t.bigint "estudiante_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["estudiante_id"], name: "index_informacion_academicas_on_estudiante_id"
    t.index ["id"], name: "index_informacion_academicas_on_id", unique: true
  end

  create_table "institucions", force: :cascade do |t|
    t.string "nombre", limit: 100
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_institucions_on_id", unique: true
  end

  create_table "modalidads", force: :cascade do |t|
    t.string "nombre", limit: 15
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_modalidads_on_id", unique: true
  end

  create_table "nivels", force: :cascade do |t|
    t.string "nombre", limit: 100
    t.float "rango_min"
    t.float "rango_max"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_nivels_on_id", unique: true
  end

  create_table "pais", force: :cascade do |t|
    t.string "nombre", limit: 60
    t.string "nacionalidad", limit: 30
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_pais_on_id", unique: true
  end

  create_table "personas", force: :cascade do |t|
    t.string "nombres", limit: 50
    t.string "apellidos", limit: 50
    t.date "fecha_nacimiento"
    t.string "correo_electronico", limit: 50
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_personas_on_id", unique: true
  end

  create_table "programa_internacionals", force: :cascade do |t|
    t.string "nombre", limit: 30
    t.bigint "pai_id"
    t.bigint "institucion_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_programa_internacionals_on_id", unique: true
    t.index ["institucion_id"], name: "index_programa_internacionals_on_institucion_id"
    t.index ["pai_id"], name: "index_programa_internacionals_on_pai_id"
  end

  create_table "progreso_inscripcions", force: :cascade do |t|
    t.boolean "formulario_solicitud"
    t.boolean "acta_nacimiento"
    t.boolean "certificacion_medica"
    t.boolean "fotografias"
    t.boolean "copia_cedula"
    t.boolean "record_secundaria"
    t.boolean "certificado_pruebas_nacionales"
    t.boolean "recibo_admision"
    t.boolean "copia_seguro_salud"
    t.boolean "acta_nacimiento_padre"
    t.boolean "record_notas_original_de_univ_de_procedencia"
    t.boolean "copia_vacunacion"
    t.bigint "estudiante_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["estudiante_id"], name: "index_progreso_inscripcions_on_estudiante_id"
    t.index ["estudiante_id"], name: "index_progreso_inscripcions_on_estudiantes_id", unique: true
    t.index ["id"], name: "index_progreso_inscripcions_on_id", unique: true
  end

  create_table "rols", force: :cascade do |t|
    t.string "nombre", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_rols_on_id", unique: true
  end

  create_table "temporadas", force: :cascade do |t|
    t.string "nombre", limit: 20
    t.boolean "actual"
    t.date "fecha_inicio"
    t.date "fecha_final"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_temporadas_on_id", unique: true
  end

  create_table "tipo_evaluacions", force: :cascade do |t|
    t.string "nombre", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_tipo_evaluacions_on_id", unique: true
  end

  create_table "tutories", force: :cascade do |t|
    t.string "lugar", limit: 20
    t.bigint "profesor_id"
    t.bigint "clase_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["clase_id"], name: "index_tutories_on_clase_id"
    t.index ["id"], name: "index_tutories_on_id", unique: true
    t.index ["profesor_id"], name: "index_tutories_on_profesor_id"
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nombre", limit: 50
    t.string "password", limit: 50
    t.bigint "rol_id"
    t.bigint "persona_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_usuarios_on_id", unique: true
    t.index ["persona_id"], name: "index_usuarios_on_persona_id"
    t.index ["rol_id"], name: "index_usuarios_on_rol_id"
  end

  add_foreign_key "actividads", "usuarios"
  add_foreign_key "asignaturas", "facultads"
  add_foreign_key "bloques", "bloques", column: "bloque_padre_id"
  add_foreign_key "bloques", "categories"
  add_foreign_key "bloques", "estudiantes", column: "creador_estudiante_id"
  add_foreign_key "bloques", "temporadas"
  add_foreign_key "bloques", "usuarios", column: "creador_usuario_id"
  add_foreign_key "clases", "asignaturas"
  add_foreign_key "clases", "clases", column: "clase_vinculada_id"
  add_foreign_key "clases", "temporadas"
  add_foreign_key "clases", "usuarios", column: "profesor_id"
  add_foreign_key "direccions", "estudiantes"
  add_foreign_key "direccions", "pais"
  add_foreign_key "estudiantes", "carrera_solicitadas"
  add_foreign_key "estudiantes", "personas"
  add_foreign_key "estudiantes", "personas", column: "madre_id"
  add_foreign_key "estudiantes", "personas", column: "padre_id"
  add_foreign_key "estudiantes", "programa_internacionals"
  add_foreign_key "evaluacions", "bloques"
  add_foreign_key "evaluacions", "clases"
  add_foreign_key "evaluacions", "tipo_evaluacions"
  add_foreign_key "examen_de_nivels", "estudiantes"
  add_foreign_key "examen_de_nivels", "nivels"
  add_foreign_key "horarios", "clases"
  add_foreign_key "horarios", "tutories"
  add_foreign_key "informacion_academicas", "estudiantes"
  add_foreign_key "programa_internacionals", "institucions"
  add_foreign_key "programa_internacionals", "pais"
  add_foreign_key "progreso_inscripcions", "estudiantes"
  add_foreign_key "tutories", "clases"
  add_foreign_key "tutories", "usuarios", column: "profesor_id"
  add_foreign_key "usuarios", "personas"
  add_foreign_key "usuarios", "rols"
end
