require 'test_helper'

class ClaseEstudiantesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clase_estudiante = clase_estudiantes(:one)
  end

  test "should get index" do
    get clase_estudiantes_url
    assert_response :success
  end

  test "should get new" do
    get new_clase_estudiante_url
    assert_response :success
  end

  test "should create clase_estudiante" do
    assert_difference('ClaseEstudiante.count') do
      post clase_estudiantes_url, params: { clase_estudiante: { clase_id: @clase_estudiante.clase_id, estudiante_id: @clase_estudiante.estudiante_id } }
    end

    assert_redirected_to clase_estudiante_url(ClaseEstudiante.last)
  end

  test "should show clase_estudiante" do
    get clase_estudiante_url(@clase_estudiante)
    assert_response :success
  end

  test "should get edit" do
    get edit_clase_estudiante_url(@clase_estudiante)
    assert_response :success
  end

  test "should update clase_estudiante" do
    patch clase_estudiante_url(@clase_estudiante), params: { clase_estudiante: { clase_id: @clase_estudiante.clase_id, estudiante_id: @clase_estudiante.estudiante_id } }
    assert_redirected_to clase_estudiante_url(@clase_estudiante)
  end

  test "should destroy clase_estudiante" do
    assert_difference('ClaseEstudiante.count', -1) do
      delete clase_estudiante_url(@clase_estudiante)
    end

    assert_redirected_to clase_estudiantes_url
  end
end
