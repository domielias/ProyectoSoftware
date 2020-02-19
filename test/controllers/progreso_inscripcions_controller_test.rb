require 'test_helper'

class ProgresoInscripcionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @progreso_inscripcion = progreso_inscripcions(:one)
  end

  test "should get index" do
    get progreso_inscripcions_url
    assert_response :success
  end

  test "should get new" do
    get new_progreso_inscripcion_url
    assert_response :success
  end

  test "should create progreso_inscripcion" do
    assert_difference('ProgresoInscripcion.count') do
      post progreso_inscripcions_url, params: { progreso_inscripcion: { acta_nacimiento: @progreso_inscripcion.acta_nacimiento, acta_nacimiento_padre: @progreso_inscripcion.acta_nacimiento_padre, certificacion_medica: @progreso_inscripcion.certificacion_medica, certificado_pruebas_nacionales: @progreso_inscripcion.certificado_pruebas_nacionales, copia_cedula: @progreso_inscripcion.copia_cedula, copia_seguro_salud: @progreso_inscripcion.copia_seguro_salud, copia_vacunacion: @progreso_inscripcion.copia_vacunacion, formulario_solicitud: @progreso_inscripcion.formulario_solicitud, fotografias: @progreso_inscripcion.fotografias, recibo_admision: @progreso_inscripcion.recibo_admision, record_notas_original_de_univ_de_procedencia: @progreso_inscripcion.record_notas_original_de_univ_de_procedencia, record_secundaria: @progreso_inscripcion.record_secundaria } }
    end

    assert_redirected_to progreso_inscripcion_url(ProgresoInscripcion.last)
  end

  test "should show progreso_inscripcion" do
    get progreso_inscripcion_url(@progreso_inscripcion)
    assert_response :success
  end

  test "should get edit" do
    get edit_progreso_inscripcion_url(@progreso_inscripcion)
    assert_response :success
  end

  test "should update progreso_inscripcion" do
    patch progreso_inscripcion_url(@progreso_inscripcion), params: { progreso_inscripcion: { acta_nacimiento: @progreso_inscripcion.acta_nacimiento, acta_nacimiento_padre: @progreso_inscripcion.acta_nacimiento_padre, certificacion_medica: @progreso_inscripcion.certificacion_medica, certificado_pruebas_nacionales: @progreso_inscripcion.certificado_pruebas_nacionales, copia_cedula: @progreso_inscripcion.copia_cedula, copia_seguro_salud: @progreso_inscripcion.copia_seguro_salud, copia_vacunacion: @progreso_inscripcion.copia_vacunacion, formulario_solicitud: @progreso_inscripcion.formulario_solicitud, fotografias: @progreso_inscripcion.fotografias, recibo_admision: @progreso_inscripcion.recibo_admision, record_notas_original_de_univ_de_procedencia: @progreso_inscripcion.record_notas_original_de_univ_de_procedencia, record_secundaria: @progreso_inscripcion.record_secundaria } }
    assert_redirected_to progreso_inscripcion_url(@progreso_inscripcion)
  end

  test "should destroy progreso_inscripcion" do
    assert_difference('ProgresoInscripcion.count', -1) do
      delete progreso_inscripcion_url(@progreso_inscripcion)
    end

    assert_redirected_to progreso_inscripcions_url
  end
end
