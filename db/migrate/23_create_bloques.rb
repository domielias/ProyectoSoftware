class CreateBloques < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques do |t|
      t.timestamp :fecha_inicio #####
      t.timestamp :fecha_final #####

      t.references :category, foreign_key: {to_table: :categories}
      t.references :creador, foreign_key: {to_table: :usuarios}
      t.references :temporada, foreign_key: true

      t.timestamps
    end

    add_index :bloques, :id, unique: true

  end
end
