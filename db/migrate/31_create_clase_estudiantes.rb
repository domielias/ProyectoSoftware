class CreateClaseEstudiantes < ActiveRecord::Migration[6.0]
  def change
    create_table :clase_estudiantes do |t|
      t.integer :clase_id, null: false
      t.integer :estudiante_id, null: false

      t.timestamps
    end
  end
end
