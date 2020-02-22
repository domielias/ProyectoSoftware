class CreateFacultads < ActiveRecord::Migration[6.0]
  def change
    create_table :facultads do |t|
      t.string :nombre, limit: 25

      t.timestamps
    end
  end
end
