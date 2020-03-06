class CreateConfiguracions < ActiveRecord::Migration[6.0]
  def change
    create_table :configuracions do |t|

      t.timestamps
    end
  end
end
