class CreateEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :estudiantes do |t|
      t.string :pasaporte, limit: 12
      t.float :tiempo_residencia
      t.integer :numero_residencia
      t.integer :id_campus
      t.integer :matricula
      t.string :estado_civil, limit: 15
      t.string :nombre_conyugue, limit: 50
      t.string :sexo, limit: 9
      t.boolean :egresado

      t.integer :facultad_id
      t.integer :padre_id
      t.integer :madre_id
      t.integer :carrera_solicitada_id
      t.integer :programa_internacional_id

      t.timestamps
    end

    add_index :estudiantes, :id, unique: true

    add_foreign_key :estudiantes, :facultads, column: :facultad_id
    add_index :estudiantes, :facultad_id

    add_foreign_key :estudiantes, :personas, column: :padre_id
    add_index :estudiantes, :padre_id

    add_foreign_key :estudiantes, :personas, column: :madre_id
    add_index :estudiantes, :madre_id

    add_foreign_key :estudiantes, :carrera_solicitadas, column: :carrera_solicitada_id
    add_index :estudiantes, :carrera_solicitada_id

    add_foreign_key :estudiantes, :programa_internacionals, column: :programa_internacional_id
    add_index :estudiantes, :programa_internacional_id

  end
end
