class CreateClases < ActiveRecord::Migration[6.0]
  def change
    create_table :clases do |t|
      t.string :seccion ######
      t.string :no_clase #######
      t.string :lugar, limit: 20 #######
      t.string :modalidad, limit: 20 #######
      t.string :correquisito, limit: 20 #######


      t.references :profesor, foreign_key: {to_table: :users} ############
      t.references :asignatura, foreign_key: true  ##############
      t.references :ciclo, foreign_key: true ############
      # t.references :correquisito, foreign_key: {to_table: :clases}
      t.references :bloque, foreign_key: true

      t.timestamps
    end
    add_index :clases, :id, unique: true
  end
end
