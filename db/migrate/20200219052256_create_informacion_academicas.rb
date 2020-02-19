class CreateInformacionAcademicas < ActiveRecord::Migration[6.0]
  def change
    create_table :informacion_academicas, id: :uuid do |t|
      t.float :cantidad_de_anos_de_espanol_estudiadas
      t.string :asignaturas_de_espanol_recientes, limit: 150
      t.float :cantidad_de_horas_de_espanol_cursadas
      t.string :nivel_alcanzado, limit: 20

      t.timestamps
    end
  end
end
