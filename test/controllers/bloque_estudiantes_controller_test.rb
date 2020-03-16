require 'test_helper'

class BloqueEstudiantesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bloque_estudiante = bloque_estudiantes(:one)
  end

  test "should get index" do
    get bloque_estudiantes_url
    assert_response :success
  end

  test "should get new" do
    get new_bloque_estudiante_url
    assert_response :success
  end

  test "should create bloque_estudiante" do
    assert_difference('BloqueEstudiante.count') do
      post bloque_estudiantes_url, params: { bloque_estudiante: { bloque_id: @bloque_estudiante.bloque_id, estudiante_id: @bloque_estudiante.estudiante_id } }
    end

    assert_redirected_to bloque_estudiante_url(BloqueEstudiante.last)
  end

  test "should show bloque_estudiante" do
    get bloque_estudiante_url(@bloque_estudiante)
    assert_response :success
  end

  test "should get edit" do
    get edit_bloque_estudiante_url(@bloque_estudiante)
    assert_response :success
  end

  test "should update bloque_estudiante" do
    patch bloque_estudiante_url(@bloque_estudiante), params: { bloque_estudiante: { bloque_id: @bloque_estudiante.bloque_id, estudiante_id: @bloque_estudiante.estudiante_id } }
    assert_redirected_to bloque_estudiante_url(@bloque_estudiante)
  end

  test "should destroy bloque_estudiante" do
    assert_difference('BloqueEstudiante.count', -1) do
      delete bloque_estudiante_url(@bloque_estudiante)
    end

    assert_redirected_to bloque_estudiantes_url
  end
end
