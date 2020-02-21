class CreateHorarios < ActiveRecord::Migration[6.0]
  def change
    create_table :horarios, id: :uuid do |t|
      t.integer :clase_id
      t.integer :tutoria_id
      t.integer :aula_id
      t.timestamp :inicio
      t.timestamp :fin

      t.timestamps
    end
  end
end
