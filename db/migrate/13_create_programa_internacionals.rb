class CreateProgramaInternacionals < ActiveRecord::Migration[6.0]
  def change
    create_table :programa_internacionals do |t|
      t.string :nombre, null: false , limit: 30

      t.references :pai, foreign_key: true
      t.references :institucion, foreign_key: true

      t.timestamps
    end

    add_index :programa_internacionals, :id, unique: true

  end
end
