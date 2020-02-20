class CreatePersonas < ActiveRecord::Migration[6.0]
  def change
    create_table :personas, id: :uuid do |t|
      t.integer :lugar_nacimiento_persona_id,
      t.integer :residencia_persona_id,
      t.string :nombres, limit: 50
      t.string :apellidos, limit: 50
      t.date :fecha_nacimiento
      t.string :puesto, limit: 25
      t.string :correo_electronico, limit: 60

      t.timestamps
    end
  end
end
