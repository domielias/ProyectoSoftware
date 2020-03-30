class CreateEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :estudiantes do |t|
      t.string :pasaporte, limit: 12
      t.float :tiempo_residencia
      t.integer :numero_residencia
      t.integer :matricula
      t.string :estado_civil, limit: 15
      t.string :nombre_conyugue, limit: 50
      t.string :sexo, limit: 9
      t.boolean :egresado
      t.boolean :admitido

      # t.references :facultad, foreign_key: true
      t.references :padre, foreign_key:{to_table: :personas}
      t.references :madre, foreign_key: {to_table: :personas}
      t.references :carrera_solicitada, foreign_key: true
      t.references :programa_internacional, foreign_key:true
      # t.references :progreso_inscripcion, foreign_key: true

      t.timestamps

      t.references :persona, foreign_key: true

    end

    add_index :estudiantes, :id, unique: true

  end

end
