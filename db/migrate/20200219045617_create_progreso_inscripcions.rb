class CreateProgresoInscripcions < ActiveRecord::Migration[6.0]
  def change
    create_table :progreso_inscripcions, id: :uuid do |t|
      t.boolean :formulario_solicitud
      t.boolean :acta_nacimiento
      t.boolean :certificacion_medica
      t.boolean :fotografias
      t.boolean :copia_cedula
      t.boolean :record_secundaria
      t.boolean :certificado_pruebas_nacionales
      t.boolean :recibo_admision
      t.boolean :copia_seguro_salud
      t.boolean :acta_nacimiento_padre
      t.boolean :record_notas_original_de_univ_de_procedencia
      t.boolean :copia_vacunacion

      t.timestamps
    end
  end
end
