class AddInitialPasswordToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :initial_password, :string
  end
end
