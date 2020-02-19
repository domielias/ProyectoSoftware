class CreatePais < ActiveRecord::Migration[6.0]
  def change
    create_table :pais, id: :uuid do |t|
      t.string :nombre
      t.string :nacionalidad

      t.timestamps
    end
  end
end
