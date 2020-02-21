require 'test_helper'

class ActividadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @actividad = actividads(:one)
  end

  test "should get index" do
    get actividads_url
    assert_response :success
  end

  test "should get new" do
    get new_actividad_url
    assert_response :success
  end

  test "should create actividad" do
    assert_difference('Actividad.count') do
      post actividads_url, params: { actividad: { dentro_de_la_ciudad: @actividad.dentro_de_la_ciudad, descripcion: @actividad.descripcion, fecha_final: @actividad.fecha_final, fecha_inicio: @actividad.fecha_inicio, forma_de_transporte: @actividad.forma_de_transporte, ubicacion: @actividad.ubicacion } }
    end

    assert_redirected_to actividad_url(Actividad.last)
  end

  test "should show actividad" do
    get actividad_url(@actividad)
    assert_response :success
  end

  test "should get edit" do
    get edit_actividad_url(@actividad)
    assert_response :success
  end

  test "should update actividad" do
    patch actividad_url(@actividad), params: { actividad: { dentro_de_la_ciudad: @actividad.dentro_de_la_ciudad, descripcion: @actividad.descripcion, fecha_final: @actividad.fecha_final, fecha_inicio: @actividad.fecha_inicio, forma_de_transporte: @actividad.forma_de_transporte, ubicacion: @actividad.ubicacion } }
    assert_redirected_to actividad_url(@actividad)
  end

  test "should destroy actividad" do
    assert_difference('Actividad.count', -1) do
      delete actividad_url(@actividad)
    end

    assert_redirected_to actividads_url
  end
end
