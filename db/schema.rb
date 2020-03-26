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

