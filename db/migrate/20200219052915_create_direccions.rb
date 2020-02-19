class CreateDireccions < ActiveRecord::Migration[6.0]
  def change
    create_table :direccions, id: :uuid do |t|
      t.string :telefono, limit: 20
      t.string :calle, limit: 40
      t.string :ciudad, limit: 30
      t.string :codigo_postal, limit: 15

      t.timestamps
    end
  end
end
