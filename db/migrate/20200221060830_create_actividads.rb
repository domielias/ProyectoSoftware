class CreateActividads < ActiveRecord::Migration[6.0]
  def change
    create_table :actividads, id: :uuid do |t|
      t.timestamp :fecha_inicio
      t.timestamp :fecha_final
      t.string :descripcion, limit: 80
      t.string :ubicacion, limit: 30
      t.string :forma_de_transporte, limit: 30
      t.boolean :dentro_de_la_ciudad

      t.timestamps
    end
  end
end
