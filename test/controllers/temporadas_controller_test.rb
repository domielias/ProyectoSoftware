require 'test_helper'

class TemporadasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @temporada = temporadas(:one)
  end

  test "should get index" do
    get temporadas_url
    assert_response :success
  end

  test "should get new" do
    get new_temporada_url
    assert_response :success
  end

  test "should create temporada" do
    assert_difference('Temporada.count') do
      post temporadas_url, params: { temporada: { nombre: @temporada.nombre } }
    end

    assert_redirected_to temporada_url(Temporada.last)
  end

  test "should show temporada" do
    get temporada_url(@temporada)
    assert_response :success
  end

  test "should get edit" do
    get edit_temporada_url(@temporada)
    assert_response :success
  end

  test "should update temporada" do
    patch temporada_url(@temporada), params: { temporada: { nombre: @temporada.nombre } }
    assert_redirected_to temporada_url(@temporada)
  end

  test "should destroy temporada" do
    assert_difference('Temporada.count', -1) do
      delete temporada_url(@temporada)
    end

    assert_redirected_to temporadas_url
  end
end
