class CreateCiclos < ActiveRecord::Migration[6.0]
  def change
    create_table :ciclos do |t|
      t.string :codigo, limit: 10
      t.string :nombre, limit: 20
      t.boolean :actual ##########

        t.date :fecha_inicio #####
        t.date :fecha_final #####

      t.timestamps
    end

    add_index :ciclos, :id, unique: true

  end
end
