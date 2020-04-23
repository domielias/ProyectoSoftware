class CreateTutories < ActiveRecord::Migration[6.0]
  def change
    create_table :tutories do |t|

      t.string :ubicacion, limit: 30
      t.references :clase, foreign_key: true

    end

    add_index :tutories, :id, unique: true

  end
end
