class CreateTutories < ActiveRecord::Migration[6.0]
  def change
    create_table :tutories do |t|

      t.string :lugar, limit: 20
      t.references :profesor, foreign_key: {to_table: :usuarios}
      t.references :clase, foreign_key: true
      t.timestamps
    end

    add_index :tutories, :id, unique: true

  end
end
