class CreateEdificios < ActiveRecord::Migration[6.0]
  def change
    create_table :edificios do |t|
      t.string :nombre, limit: 30
      t.string :abreviatura, limit: 30

      t.timestamps
    end

    add_index :edificios, :id, unique: true

  end
end
