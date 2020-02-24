class CreateHorarios < ActiveRecord::Migration[6.0]
  def change
    create_table :horarios do |t|
      t.references :clase, foreign_key: true
      t.references :tutory, foreign_key: true
      t.references :aula, foreign_key: true
      t.timestamp :inicio
      t.timestamp :fin
      t.timestamps
    end

    add_index :horarios, :id, unique: true

  end
end
