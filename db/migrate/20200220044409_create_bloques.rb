class CreateBloques < ActiveRecord::Migration[6.0]
  def change
    create_table :bloques do |t|
      t.timestamp :fecha_inicio
      t.timestamp :fecha_final

      t.timestamps
    end
  end
end
