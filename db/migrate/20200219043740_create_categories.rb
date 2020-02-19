class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :nombre, limit: 20

      t.timestamps
    end
  end
end
