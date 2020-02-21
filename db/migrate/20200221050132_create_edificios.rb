class CreateEdificios < ActiveRecord::Migration[6.0]
  def change
    create_table :edificios, id: :uuid do |t|
      t.string :nombre, limit: 30
      t.string :abreviatura, limit: 30

      t.timestamps
    end
  end
end
