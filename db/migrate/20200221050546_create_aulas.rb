class CreateAulas < ActiveRecord::Migration[6.0]
  def change
    create_table :aulas, id: :uuid do |t|
      t.string :nombre, limit: 25

      t.timestamps
    end
  end
end
