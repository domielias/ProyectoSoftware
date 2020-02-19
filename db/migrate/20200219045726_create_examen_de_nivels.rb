class CreateExamenDeNivels < ActiveRecord::Migration[6.0]
  def change
    create_table :examen_de_nivels, id: :uuid do |t|
      t.float :promedio

      t.timestamps
    end
  end
end
