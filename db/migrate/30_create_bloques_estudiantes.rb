class CreateBloquesEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques_estudiantes,id: false do |t|
      t.references :estudiante, null: false, foreign_key: true
      t.references :bloque, null: false, foreign_key: true

      t.timestamps
    end
  end
end
