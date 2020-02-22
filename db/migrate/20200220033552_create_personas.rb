class CreatePersonas < ActiveRecord::Migration[6.0]
  def change
    create_table :personas do |t|
      t.string :nombres, limit: 50
      t.string :apellidos, limit: 50
      t.date :fecha_nacimiento
      t.string :correo_electronico, limit: 50

      t.timestamps
    end

    add_index :personas, :id, unique: true

  end
end
