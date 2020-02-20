class CreatePersonaPais < ActiveRecord::Migration[6.0]
  def change
    create_table :persona_pais, id: :uuid do |t|
      t.integer :pais_persona_id
      t.boolean :lugar_nacimiento

      t.timestamps
    end
  end
end
