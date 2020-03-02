class CreateInstitucions < ActiveRecord::Migration[6.0]
  def change
    create_table :institucions do |t|
      t.string :nombre, limit: 100

      t.timestamps
    end

    add_index :institucions, :id, unique: true

  end
end
