class CreateBloques < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques do |t|
      t.string :nombre, limit: 20 #######
      t.string :creador, limit: 100 #######
      t.boolean :creado_por_estudiante ####### No se va a usar
      ###### Si es true, es un bloque creado con el propósito de ser seleccionado en la ficha de estudiante,
      ###### si es false, es para almacenar las asignaturas para el semestre.
      t.boolean :seleccion_estudiante, null: false
      t.float :evaluacion_bloque_num
      t.string :evaluacion_bloque_str

      t.references :category, foreign_key: {to_table: :categories}
      t.references :bloque_padre, foreign_key: {to_table: :bloques}
      t.references :ciclo, foreign_key: true, null: false
      t.references :nivel, foreign_key: true, null: false
      t.references :programa_epe_solicitado, foreign_key: true, null: false

      t.timestamps
    end

    add_index :bloques, :id, unique: true

  end
end
