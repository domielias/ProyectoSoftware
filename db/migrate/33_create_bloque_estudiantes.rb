class CreateBloqueEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :bloque_estudiantes do |t|
      t.integer :bloque_id, null: false
      t.integer :estudiante_id, null: false
      t.string :asignaturas_solicitadas, limit: 100

      t.timestamps
    end
  end
end
