class CreateBloques < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques do |t|
      t.string :nombre, limit: 20 #######
      t.string :creador, limit: 100 #######
      t.boolean :creado_por_estudiante #######

      t.references :category, foreign_key: {to_table: :categories}
      t.references :bloque_padre, foreign_key: {to_table: :bloques}
      t.references :ciclo, foreign_key: true
      t.references :nivel, foreign_key: true

      t.timestamps
    end

    add_index :bloques, :id, unique: true

  end
end
