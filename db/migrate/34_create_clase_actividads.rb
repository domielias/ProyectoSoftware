class CreateClaseActividads < ActiveRecord::Migration[6.0]
  def change
    create_table :clase_actividads do |t|
      t.integer :clase_id, null: false
      t.integer :actividad_id, null: false

      t.timestamps
    end
  end
end
