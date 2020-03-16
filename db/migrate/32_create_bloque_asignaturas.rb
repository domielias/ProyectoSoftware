class CreateBloqueAsignaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :bloque_asignaturas do |t|
      t.integer :bloque_id, null: false
      t.integer :asignatura_id, null: false

      t.timestamps
    end
  end
end
