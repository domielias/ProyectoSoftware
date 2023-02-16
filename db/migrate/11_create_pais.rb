class CreatePais < ActiveRecord::Migration[6.0]
  def change
    create_table :pais do |t|
      t.string :nombre, null: false, limit: 150
      t.string :nacionalidad, limit: 150
      t.timestamps
    end

    add_index :pais, :id, unique: true

  end
end
