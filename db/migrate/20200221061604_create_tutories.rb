class CreateTutories < ActiveRecord::Migration[6.0]
  def change
    create_table :tutories, id: :uuid do |t|
      t.integer :profesor_id
      t.integer :clase_id
      t.integer :aula_id

      t.timestamps
    end
  end
end
