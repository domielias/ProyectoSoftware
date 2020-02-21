require 'test_helper'

class EvaluacionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @evaluacion = evaluacions(:one)
  end

  test "should get index" do
    get evaluacions_url
    assert_response :success
  end

  test "should get new" do
    get new_evaluacion_url
    assert_response :success
  end

  test "should create evaluacion" do
    assert_difference('Evaluacion.count') do
      post evaluacions_url, params: { evaluacion: { promedio: @evaluacion.promedio } }
    end

    assert_redirected_to evaluacion_url(Evaluacion.last)
  end

  test "should show evaluacion" do
    get evaluacion_url(@evaluacion)
    assert_response :success
  end

  test "should get edit" do
    get edit_evaluacion_url(@evaluacion)
    assert_response :success
  end

  test "should update evaluacion" do
    patch evaluacion_url(@evaluacion), params: { evaluacion: { promedio: @evaluacion.promedio } }
    assert_redirected_to evaluacion_url(@evaluacion)
  end

  test "should destroy evaluacion" do
    assert_difference('Evaluacion.count', -1) do
      delete evaluacion_url(@evaluacion)
    end

    assert_redirected_to evaluacions_url
  end
end
