class CreatePersonaPais < ActiveRecord::Migration[6.0]
  def change
    create_table :persona_pais do |t|
      t.belongs_to :persona
      t.belongs_to :pais
      t.boolean :lugar_nacimiento

      t.timestamps
    end
  end
end
