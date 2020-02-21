require 'test_helper'

class TipoEvaluacionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tipo_evaluacion = tipo_evaluacions(:one)
  end

  test "should get index" do
    get tipo_evaluacions_url
    assert_response :success
  end

  test "should get new" do
    get new_tipo_evaluacion_url
    assert_response :success
  end

  test "should create tipo_evaluacion" do
    assert_difference('TipoEvaluacion.count') do
      post tipo_evaluacions_url, params: { tipo_evaluacion: { nombre: @tipo_evaluacion.nombre } }
    end

    assert_redirected_to tipo_evaluacion_url(TipoEvaluacion.last)
  end

  test "should show tipo_evaluacion" do
    get tipo_evaluacion_url(@tipo_evaluacion)
    assert_response :success
  end

  test "should get edit" do
    get edit_tipo_evaluacion_url(@tipo_evaluacion)
    assert_response :success
  end

  test "should update tipo_evaluacion" do
    patch tipo_evaluacion_url(@tipo_evaluacion), params: { tipo_evaluacion: { nombre: @tipo_evaluacion.nombre } }
    assert_redirected_to tipo_evaluacion_url(@tipo_evaluacion)
  end

  test "should destroy tipo_evaluacion" do
    assert_difference('TipoEvaluacion.count', -1) do
      delete tipo_evaluacion_url(@tipo_evaluacion)
    end

    assert_redirected_to tipo_evaluacions_url
  end
end
