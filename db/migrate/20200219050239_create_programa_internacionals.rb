class CreateProgramaInternacionals < ActiveRecord::Migration[6.0]
  def change
    create_table :programa_internacionals, id: :uuid do |t|
      t.string :nombre, limit: 30

      t.timestamps
    end
  end
end
