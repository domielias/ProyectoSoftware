class CreateHorarios < ActiveRecord::Migration[6.0]
  def change
    create_table :horarios do |t|
      t.references :clase, foreign_key: true
      t.references :tutory, foreign_key: true
      t.string :dias, limit: 50
      t.timestamp :start
      t.timestamp :end
      t.timestamps
    end

    add_index :horarios, :id, unique: true

  end
end
