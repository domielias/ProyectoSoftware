class CreateClases < ActiveRecord::Migration[6.0]
  def change
    create_table :clases do |t|
      t.timestamp :fecha_inicio
      t.timestamp :fecha_final
      t.integer :seccion
      t.boolean :activo
      t.integer :no_clase
      t.timestamps
    end
  end
end
