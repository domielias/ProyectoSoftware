class AddProfesorToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :profesor, :boolean, default: false
  end
end
