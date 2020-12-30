class CreateProgramaEpeSolicitados < ActiveRecord::Migration[6.0]
  def change
    create_table :programa_epe_solicitados do |t|

      t.string :nombre, limit: 60

      t.timestamps
    end
    add_index :programa_epe_solicitados, :id, unique: true
  end
end
