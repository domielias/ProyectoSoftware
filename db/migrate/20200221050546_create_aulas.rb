class CreateAulas < ActiveRecord::Migration[6.0]
  def change
    create_table :aulas do |t|
      t.string :nombre, limit: 25
      t.integer :edificio_id
      t.timestamps
    end

    add_index :aulas, :id, unique: true

    add_foreign_key :aulas, :edificios, column: :edificio_id
    add_index :aulas, :edificio_id

  end
end
