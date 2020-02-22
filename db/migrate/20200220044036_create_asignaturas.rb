class CreateAsignaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :asignaturas do |t|
      t.integer :clave
      t.integer :valor_teorico
      t.integer :valor_practico
      t.integer :valor_credito
      t.boolean :activo
      t.timestamps
    end
  end
end
