class CreateCarreraSolicitadas < ActiveRecord::Migration[6.0]
  def change
    create_table :carrera_solicitadas, id: :uuid do |t|
      t.string :nombre, limit: 50

      t.timestamps
    end
  end
end
