require "application_system_test_case"

class ProgresoInscripcionsTest < ApplicationSystemTestCase
  setup do
    @progreso_inscripcion = progreso_inscripcions(:one)
  end

  test "visiting the index" do
    visit progreso_inscripcions_url
    assert_selector "h1", text: "Progreso Inscripcions"
  end

  test "creating a Progreso inscripcion" do
    visit progreso_inscripcions_url
    click_on "New Progreso Inscripcion"

    check "Acta nacimiento" if @progreso_inscripcion.acta_nacimiento
    check "Acta nacimiento padre" if @progreso_inscripcion.acta_nacimiento_padre
    check "Certificacion medica" if @progreso_inscripcion.certificacion_medica
    check "Certificado pruebas nacionales" if @progreso_inscripcion.certificado_pruebas_nacionales
    check "Copia cedula" if @progreso_inscripcion.copia_cedula
    check "Copia seguro salud" if @progreso_inscripcion.copia_seguro_salud
    check "Copia vacunacion" if @progreso_inscripcion.copia_vacunacion
    check "Formulario solicitud" if @progreso_inscripcion.formulario_solicitud
    check "Fotografias" if @progreso_inscripcion.fotografias
    check "Recibo admision" if @progreso_inscripcion.recibo_admision
    check "Record notas original de univ de procedencia" if @progreso_inscripcion.record_notas_original_de_univ_de_procedencia
    check "Record secundaria" if @progreso_inscripcion.record_secundaria
    click_on "Create Progreso inscripcion"

    assert_text "Progreso inscripcion was successfully created"
    click_on "Back"
  end

  test "updating a Progreso inscripcion" do
    visit progreso_inscripcions_url
    click_on "Edit", match: :first

    check "Acta nacimiento" if @progreso_inscripcion.acta_nacimiento
    check "Acta nacimiento padre" if @progreso_inscripcion.acta_nacimiento_padre
    check "Certificacion medica" if @progreso_inscripcion.certificacion_medica
    check "Certificado pruebas nacionales" if @progreso_inscripcion.certificado_pruebas_nacionales
    check "Copia cedula" if @progreso_inscripcion.copia_cedula
    check "Copia seguro salud" if @progreso_inscripcion.copia_seguro_salud
    check "Copia vacunacion" if @progreso_inscripcion.copia_vacunacion
    check "Formulario solicitud" if @progreso_inscripcion.formulario_solicitud
    check "Fotografias" if @progreso_inscripcion.fotografias
    check "Recibo admision" if @progreso_inscripcion.recibo_admision
    check "Record notas original de univ de procedencia" if @progreso_inscripcion.record_notas_original_de_univ_de_procedencia
    check "Record secundaria" if @progreso_inscripcion.record_secundaria
    click_on "Update Progreso inscripcion"

    assert_text "Progreso inscripcion was successfully updated"
    click_on "Back"
  end

  test "destroying a Progreso inscripcion" do
    visit progreso_inscripcions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Progreso inscripcion was successfully destroyed"
  end
end
