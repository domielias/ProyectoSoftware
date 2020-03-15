class CreateBloquesAsignaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques_asignaturas do |t|
      t.belongs_to  :asignatura, null: false, foreign_key: true
      t.belongs_to  :bloque, null: false, foreign_key: true

      t.timestamps
    end
  end
end
