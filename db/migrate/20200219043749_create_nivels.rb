class CreateNivels < ActiveRecord::Migration[6.0]
  def change
    create_table :nivels, id: :uuid do |t|
      t.string :nombre, limit: 30
      t.float :rango_min
      t.float :rango_max

      t.timestamps
    end
  end
end
