require 'test_helper'

class ClaseActividadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clase_actividad = clase_actividads(:one)
  end

  test "should get index" do
    get clase_actividads_url
    assert_response :success
  end

  test "should get new" do
    get new_clase_actividad_url
    assert_response :success
  end

  test "should create clase_actividad" do
    assert_difference('ClaseActividad.count') do
      post clase_actividads_url, params: { clase_actividad: { actividad_id: @clase_actividad.actividad_id, clase_id: @clase_actividad.clase_id } }
    end

    assert_redirected_to clase_actividad_url(ClaseActividad.last)
  end

  test "should show clase_actividad" do
    get clase_actividad_url(@clase_actividad)
    assert_response :success
  end

  test "should get edit" do
    get edit_clase_actividad_url(@clase_actividad)
    assert_response :success
  end

  test "should update clase_actividad" do
    patch clase_actividad_url(@clase_actividad), params: { clase_actividad: { actividad_id: @clase_actividad.actividad_id, clase_id: @clase_actividad.clase_id } }
    assert_redirected_to clase_actividad_url(@clase_actividad)
  end

  test "should destroy clase_actividad" do
    assert_difference('ClaseActividad.count', -1) do
      delete clase_actividad_url(@clase_actividad)
    end

    assert_redirected_to clase_actividads_url
  end
end
