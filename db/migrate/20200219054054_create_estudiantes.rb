class CreateEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :estudiantes, id: :uuid do |t|
      t.string :pasaporte, limit: 12
      t.float :tiempo_residencia
      t.integer :numero_residencia
      t.integer :id_campus
      t.integer :matricula
      t.string :estado_civil, limit: 15
      t.string :nombre_conyugue, limit: 50
      t.string :sexo, limit: 9
      t.boolean :egresado

      t.timestamps
    end
  end
end
