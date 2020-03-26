class CreateTemporadas < ActiveRecord::Migration[6.0]
  def change
    create_table :temporadas do |t|
      t.string :nombre, limit: 20

        t.timestamp :fecha_inicio #####
        t.timestamp :fecha_final #####

      t.timestamps
    end

    add_index :temporadas, :id, unique: true

  end
end
