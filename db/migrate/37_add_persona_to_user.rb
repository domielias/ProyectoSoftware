class AddPersonaToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :persona, null: false, foreign_key: true
  end
end
