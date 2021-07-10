class CreateActividads < ActiveRecord::Migration[6.0]
  def change
    create_table :actividads do |t|
      t.timestamp :fecha, null: false
      t.timestamp :hora_inicio
      t.timestamp :hora_fin
      t.string :nombre_de_la_actividad, limit: 80
      t.string :ubicacion, limit: 30
      t.string :forma_de_transporte, limit: 30
      t.string :objetivo, limit: 30
      t.boolean :dentro_de_la_ciudad
      t.boolean :del_departamento

      t.references :user, foreign_key: true

      t.timestamps
    end

    add_index :actividads, :id, unique: true

  end
end
