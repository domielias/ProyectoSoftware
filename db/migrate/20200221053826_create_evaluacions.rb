class CreateEvaluacions < ActiveRecord::Migration[6.0]
  def change
    create_table :evaluacions do |t|
      t.float :promedio

      t.timestamps
    end
  end
end
