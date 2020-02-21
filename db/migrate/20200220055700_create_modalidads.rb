class CreateModalidads < ActiveRecord::Migration[6.0]
  def change
    create_table :modalidads, id: :uuid do |t|
      t.string :nombre, limit: 15

      t.timestamps
    end
  end
end
