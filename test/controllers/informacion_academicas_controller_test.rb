require 'test_helper'

class InformacionAcademicasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @informacion_academica = informacion_academicas(:one)
  end

  test "should get index" do
    get informacion_academicas_url
    assert_response :success
  end

  test "should get new" do
    get new_informacion_academica_url
    assert_response :success
  end

  test "should create informacion_academica" do
    assert_difference('InformacionAcademica.count') do
      post informacion_academicas_url, params: { informacion_academica: { asignaturas_de_espanol_recientes: @informacion_academica.asignaturas_de_espanol_recientes, cantidad_de_anos_de_espanol_estudiadas: @informacion_academica.cantidad_de_anos_de_espanol_estudiadas, cantidad_de_horas_de_espanol_cursadas: @informacion_academica.cantidad_de_horas_de_espanol_cursadas, nivel_alcanzado: @informacion_academica.nivel_alcanzado } }
    end

    assert_redirected_to informacion_academica_url(InformacionAcademica.last)
  end

  test "should show informacion_academica" do
    get informacion_academica_url(@informacion_academica)
    assert_response :success
  end

  test "should get edit" do
    get edit_informacion_academica_url(@informacion_academica)
    assert_response :success
  end

  test "should update informacion_academica" do
    patch informacion_academica_url(@informacion_academica), params: { informacion_academica: { asignaturas_de_espanol_recientes: @informacion_academica.asignaturas_de_espanol_recientes, cantidad_de_anos_de_espanol_estudiadas: @informacion_academica.cantidad_de_anos_de_espanol_estudiadas, cantidad_de_horas_de_espanol_cursadas: @informacion_academica.cantidad_de_horas_de_espanol_cursadas, nivel_alcanzado: @informacion_academica.nivel_alcanzado } }
    assert_redirected_to informacion_academica_url(@informacion_academica)
  end

  test "should destroy informacion_academica" do
    assert_difference('InformacionAcademica.count', -1) do
      delete informacion_academica_url(@informacion_academica)
    end

    assert_redirected_to informacion_academicas_url
  end
end
