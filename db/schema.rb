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

ActiveRecord::Schema.define(version: 2020_02_21_050132) do

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

  create_table "asignaturas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "clave"
    t.integer "valor_teorico"
    t.integer "valor_practico"
    t.integer "valor_credito"
    t.boolean "activo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bloques", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "fecha_inicio"
    t.datetime "fecha_final"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "carrera_solicitadas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 50
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clases", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "fecha_inicio"
    t.datetime "fecha_final"
    t.integer "seccion"
    t.boolean "activo"
    t.integer "no_clase"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "direccions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "telefono", limit: 20
    t.string "calle", limit: 40
    t.string "ciudad", limit: 30
    t.string "codigo_postal", limit: 15
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "edificios", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 30
    t.string "abreviatura", limit: 30
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "estudiantes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "pasaporte", limit: 12
    t.float "tiempo_residencia"
    t.integer "numero_residencia"
    t.integer "id_campus"
    t.integer "matricula"
    t.string "estado_civil", limit: 15
    t.string "nombre_conyugue", limit: 50
    t.string "sexo", limit: 9
    t.boolean "egresado"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "examen_de_nivels", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.float "promedio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "facultads", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 25
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "informacion_academicas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.float "cantidad_de_anos_de_espanol_estudiadas"
    t.string "asignaturas_de_espanol_recientes", limit: 150
    t.float "cantidad_de_horas_de_espanol_cursadas"
    t.string "nivel_alcanzado", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "institucions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 30
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "modalidads", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 15
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "nivels", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 30
    t.float "rango_min"
    t.float "rango_max"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pais", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 60
    t.string "nacionalidad", limit: 30
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "persona_pais", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "pais_persona_id"
    t.boolean "lugar_nacimiento"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "personas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "lugar_nacimiento_persona_id"
    t.integer "residencia_persona_id"
    t.string "nombres", limit: 50
    t.string "apellidos", limit: 50
    t.date "fecha_nacimiento"
    t.string "puesto", limit: 25
    t.string "correo_electronico", limit: 50
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "programa_internacionals", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 30
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "progreso_inscripcions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
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
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rols", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "temporadas", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "universidads", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "nombre", limit: 30
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
