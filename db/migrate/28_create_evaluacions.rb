class CreateEvaluacions < ActiveRecord::Migration[6.0]
  def change
    create_table :evaluacions do |t|
      t.float :promedio

      t.references :clase, foreign_key: true
      t.references :bloque,index:true,unique:true, foreign_key: true
      t.references :tipo_evaluacion, foreign_key: true

      t.timestamps
    end

    add_index :evaluacions, :id, unique: true

  end
end