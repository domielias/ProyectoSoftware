class CreateBloques < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques do |t|
      t.timestamp :fecha_inicio #####
      t.timestamp :fecha_final #####

      t.references :category, foreign_key: {to_table: :categories}
      t.references :creador_usuario, foreign_key: {to_table: :usuarios}
      t.references :creador_estudiante, foreign_key: {to_table: :estudiantes}
      t.references :bloque_padre, foreign_key: {to_table: :bloques}
      t.references :temporada, foreign_key: true

      t.timestamps
    end

    add_index :bloques, :id, unique: true

  end
end
