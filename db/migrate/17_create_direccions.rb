class CreateDireccions < ActiveRecord::Migration[6.0]
  def change
    create_table :direccions do |t|
      t.boolean :pais_nacimiento
      t.string :telefono, limit: 20
      t.string :calle, limit: 40
      t.string :ciudad, limit: 30
      t.string :codigo_postal, limit: 15

      t.references :estudiante, foreign_key: true
      t.references :pai, foreign_key: true

      t.timestamps
    end

    add_index :direccions, :id, unique: true
    add_index :direccions, [:estudiante_id, :pai_id], unique: true

  end
end
