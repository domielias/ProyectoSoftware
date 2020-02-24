class CreateUsuarios < ActiveRecord::Migration[6.0]
  def change
    create_table :usuarios do |t|
      t.string :nombre, limit: 50
      t.string :password, limit: 50
      t.references :rol, foreign_key: true 
      t.references :persona,index:true, foreign_key: true

      t.timestamps
    end

    add_index :usuarios, :id, unique: true

  end
end
