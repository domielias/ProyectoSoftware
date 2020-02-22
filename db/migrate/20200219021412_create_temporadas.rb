class CreateTemporadas < ActiveRecord::Migration[6.0]
  def change
    create_table :temporadas do |t|
      t.string :nombre, limit: 20

      t.timestamps
    end
  end
end
