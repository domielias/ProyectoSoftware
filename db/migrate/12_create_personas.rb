class CreatePersonas < ActiveRecord::Migration[6.0]
  def change
    create_table :personas do |t|
      t.string :nombres, null: false, limit: 50
      t.string :apellidos, null: false, limit: 50
      t.string :id_campus, limit: 10
      t.string :matricula, limit: 10
      t.date :fecha_nacimiento, null: false
      t.string :correo_electronico, null: false, limit: 50

      t.timestamps
    end

    add_index :personas, :id, unique: true

  end
end
