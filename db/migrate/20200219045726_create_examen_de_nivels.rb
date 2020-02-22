class CreateExamenDeNivels < ActiveRecord::Migration[6.0]
  def change
    create_table :examen_de_nivels do |t|
      t.float :promedio

      t.integer :nivel_id

      t.timestamps
    end

    add_index :estudiantes, :id

    add_foreign_key :examen_de_nivels, :estudiantes, column: :id

    add_foreign_key :examen_de_nivels, :nivel, column: :nivel_id
    add_index :examen_de_nivels, :nivel_id

  end
end
