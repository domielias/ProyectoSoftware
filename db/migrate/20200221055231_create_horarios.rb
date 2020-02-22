class CreateHorarios < ActiveRecord::Migration[6.0]
  def change
    create_table :horarios do |t|
      t.integer :clase_id
      t.integer :tutoria_id
      t.integer :aula_id
      t.timestamp :inicio
      t.timestamp :fin

      t.references :clase, foreign_key: true
      t.references :tutoria, foreign_key: true
      t.references :aula, foreign_key: true

      t.timestamps
    end

    add_index :horarios, :id, unique: true

  end
end
