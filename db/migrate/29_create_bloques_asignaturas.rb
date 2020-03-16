class CreateBloquesAsignaturas < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques_asignaturas, id: false do |t|
      t.belongs_to :asignatura
      t.belongs_to :bloque

      # t.timestamps
    end
  end
end
