class CreateRols < ActiveRecord::Migration[6.0]
  def change
    create_table :rols do |t|
      t.string :nombre, limit: 20

      t.timestamps
    end

    add_index :rols, :id, unique: true

  end
end
