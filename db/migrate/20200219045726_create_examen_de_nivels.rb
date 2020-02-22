class CreateExamenDeNivels < ActiveRecord::Migration[6.0]
  def change
    create_table :examen_de_nivels do |t|
      t.float :promedio

      t.references :estudiante, foreign_key: true
      t.references :nivel, foreign_key: true

      t.timestamps
    end

    add_index :examen_de_nivels, :id, unique: true
    add_index :examen_de_nivels, :estudiante_id, unique: true

  end
end
