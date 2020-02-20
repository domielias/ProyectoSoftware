class CreatePais < ActiveRecord::Migration[6.0]
  def change
    create_table :pais, id: :uuid do |t|
      t.string :nombre, limit: 60
      t.string :nacionalidad, limit: 30
      t.timestamps
    end
  end
end
