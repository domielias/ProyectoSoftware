class CreateAulas < ActiveRecord::Migration[6.0]
  def change
    create_table :aulas do |t|
      t.string :nombre, limit: 25
      t.references :edificio, foreign_key: true

      t.timestamps
    end

    add_index :aulas, :id, unique: true

  end
end
