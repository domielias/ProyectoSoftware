require 'test_helper'

class CarreraSolicitadasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @carrera_solicitada = carrera_solicitadas(:one)
  end

  test "should get index" do
    get carrera_solicitadas_url
    assert_response :success
  end

  test "should get new" do
    get new_carrera_solicitada_url
    assert_response :success
  end

  test "should create carrera_solicitada" do
    assert_difference('CarreraSolicitada.count') do
      post carrera_solicitadas_url, params: { carrera_solicitada: { nombre: @carrera_solicitada.nombre } }
    end

    assert_redirected_to carrera_solicitada_url(CarreraSolicitada.last)
  end

  test "should show carrera_solicitada" do
    get carrera_solicitada_url(@carrera_solicitada)
    assert_response :success
  end

  test "should get edit" do
    get edit_carrera_solicitada_url(@carrera_solicitada)
    assert_response :success
  end

  test "should update carrera_solicitada" do
    patch carrera_solicitada_url(@carrera_solicitada), params: { carrera_solicitada: { nombre: @carrera_solicitada.nombre } }
    assert_redirected_to carrera_solicitada_url(@carrera_solicitada)
  end

  test "should destroy carrera_solicitada" do
    assert_difference('CarreraSolicitada.count', -1) do
      delete carrera_solicitada_url(@carrera_solicitada)
    end

    assert_redirected_to carrera_solicitadas_url
  end
end
