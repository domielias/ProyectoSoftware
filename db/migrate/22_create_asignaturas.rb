class CreateAsignaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :asignaturas do |t|
      t.string  :nombre, limit: 100
      t.string  :clave, limit: 7
      t.integer :valor_teorico, limit: 1
      t.integer :valor_practico, limit: 1
      t.integer :valor_credito, limit: 1
      t.boolean :activo

      t.references :facultad, foreign_key: true

      t.timestamps
    end

    add_index :asignaturas, :id, unique: true
  end
end
