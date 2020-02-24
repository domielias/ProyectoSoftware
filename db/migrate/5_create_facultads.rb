class CreateFacultads < ActiveRecord::Migration[6.0]
  def change
    create_table :facultads do |t|
      t.string :nombre, limit: 40

      t.timestamps
    end

    add_index :facultads, :id, unique: true

  end
end
