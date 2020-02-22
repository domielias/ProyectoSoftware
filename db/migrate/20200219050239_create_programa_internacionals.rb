class CreateProgramaInternacionals < ActiveRecord::Migration[6.0]
  def change
    create_table :programa_internacionals do |t|
      t.string :nombre, limit: 30

      t.integer :pai_id
      t.integer :institucion_id

      t.timestamps
    end

    add_foreign_key :programa_internacionals, :pais, column: :pai_id
    add_index :programa_internacionals, :pai_id

    add_foreign_key :programa_internacionals, :institucions, column: :institucion_id
    add_index :programa_internacionals, :institucion_id

  end
end
