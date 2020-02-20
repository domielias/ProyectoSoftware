class CreateClases < ActiveRecord::Migration[6.0]
  def change
    create_table :clases, id: :uuid do |t|
      t.timestamp :fecha_inicio
      t.timestamp :fecha_final
      t.integer :seccion
      t.boolean :activo
      t.no_clase :integer
      t.timestamps
    end
  end
end
