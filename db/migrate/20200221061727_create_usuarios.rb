class CreateUsuarios < ActiveRecord::Migration[6.0]
  def change
    create_table :usuarios, id: :uuid do |t|
      t.string :nombre, limit: 50
      t.string :password, limit: 50

      t.timestamps
    end
  end
end
