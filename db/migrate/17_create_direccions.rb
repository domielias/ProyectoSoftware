class CreateDireccions < ActiveRecord::Migration[6.0]
  def change
    create_table :direccions do |t|
      t.boolean :pais_residencia
      t.string :telefono, null: false , limit: 15
      t.string :direccion_completa, null: false,limit: 40
      t.string :ciudad, null: false , limit: 85
      t.string :codigo_postal, null: false ,limit: 15
      
      t.references :estudiante, foreign_key: true
      t.references :pai, foreign_key: true

      t.timestamps
    end

    add_index :direccions, :id, unique: true
    add_index :direccions, [:estudiante_id, :pai_id], unique: true

  end
end
