class CreateModalidads < ActiveRecord::Migration[6.0]
  def change
    create_table :modalidads do |t|
      t.string :nombre, limit: 15

      t.timestamps
    end

    add_index :modalidads, :id, unique: true

  end
end
