class CreateClases < ActiveRecord::Migration[6.0]
  def change
    create_table :clases do |t|
      t.timestamp :fecha_inicio
      t.timestamp :fecha_final
      t.integer :seccion
      t.boolean :activo
      t.integer :no_clase


      t.references :profesor, foreign_key: true
      t.references :asignatura, foreign_key: true
      t.references :temporada, foreign_key: true
      t.references :aula, foreign_key: true
      t.references :modalidad, foreign_key: true
      t.references :clase_vinculada, foreign_key: true

      t.timestamps
    end

  end
end
