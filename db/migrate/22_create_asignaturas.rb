class CreateAsignaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :asignaturas do |t|
      t.string :nombre, limit: 100
      t.integer :clave
      t.integer :valor_teorico
      t.integer :valor_practico
      t.integer :valor_credito
      t.boolean :activo

      t.references :facultad, foreign_key: true

      t.timestamps
    end

    add_index :asignaturas, :id, unique: true
  end
end
