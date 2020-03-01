class CreateTipoEvaluacions < ActiveRecord::Migration[6.0]
  def change
    create_table :tipo_evaluacions do |t|
      t.string :nombre, limit: 20

      t.timestamps
    end

    add_index :tipo_evaluacions, :id, unique: true

  end
end