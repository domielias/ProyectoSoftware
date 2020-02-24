class CreatePersonaPais < ActiveRecord::Migration[6.0]
  def change
    create_table :persona_pais do |t|
      t.boolean :lugar_nacimiento

      t.references :persona, foreign_key: true
      t.references :pai, foreign_key: true

      t.timestamps
    end

    add_index :persona_pais, :id, unique: true

  end
end
