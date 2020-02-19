class CreateRols < ActiveRecord::Migration[6.0]
  def change
    create_table :rols, id: :uuid do |t|
      t.string :nombre, limit: 20

      t.timestamps
    end
  end
end
