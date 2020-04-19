class CreateNivels < ActiveRecord::Migration[6.0]
  def change
    create_table :nivels do |t|
      t.references :programa_epe_solicitado, foreign_key: true
      t.string :nombre, limit: 25 
      t.integer :min
      t.integer :max

      t.timestamps
    end

    add_index :nivels, :id, unique: true

  end
end
