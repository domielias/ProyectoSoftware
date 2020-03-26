class CreateClases < ActiveRecord::Migration[6.0]
  def change
    create_table :clases do |t|
      t.integer :seccion ######
      t.boolean :activo ##########
      t.integer :no_clase #######
      t.string :lugar, limit: 20 #######
      t.string :modalidad, limit: 20 #######


      t.references :profesor, foreign_key: {to_table: :usuarios} ############
      t.references :asignatura, foreign_key: true  ##############
      t.references :temporada, foreign_key: true ############
      t.references :clase_vinculada, foreign_key: {to_table: :clases}

      t.timestamps
    end
    add_index :clases, :id, unique: true
  end
end
