class CreateProgresoInscripcions < ActiveRecord::Migration[6.0]
  def change
    create_table :progreso_inscripcions do |t|
      t.boolean :formulario_admisiones
      t.boolean :acta_nacimiento
      t.boolean :certificacion_medica
      t.boolean :fotografias
      t.boolean :copia_pasaporte
      t.boolean :record_secundaria
      t.boolean :certificado_pruebas_nacionales
      t.boolean :recibo_admision
      t.boolean :seguro_medico_o_viajero
      t.boolean :acta_nacimiento_padres
      t.boolean :record_notas_original_de_univ_de_procedencia
      t.boolean :formulario_especial_para_extranjeros
      t.boolean :visa_estudiante

      t.references :estudiante, foreign_key: true

      t.timestamps
    end

    add_index :progreso_inscripcions, :id, unique: true
    #add_index :progreso_inscripcions, :estudiante_id,name:'index_progreso_inscripcions_on_estudiantes_id', unique: true

  end
end
