require 'test_helper'

class EdificiosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @edificio = edificios(:one)
  end

  test "should get index" do
    get edificios_url
    assert_response :success
  end

  test "should get new" do
    get new_edificio_url
    assert_response :success
  end

  test "should create edificio" do
    assert_difference('Edificio.count') do
      post edificios_url, params: { edificio: { abreviatura: @edificio.abreviatura, nombre: @edificio.nombre } }
    end

    assert_redirected_to edificio_url(Edificio.last)
  end

  test "should show edificio" do
    get edificio_url(@edificio)
    assert_response :success
  end

  test "should get edit" do
    get edit_edificio_url(@edificio)
    assert_response :success
  end

  test "should update edificio" do
    patch edificio_url(@edificio), params: { edificio: { abreviatura: @edificio.abreviatura, nombre: @edificio.nombre } }
    assert_redirected_to edificio_url(@edificio)
  end

  test "should destroy edificio" do
    assert_difference('Edificio.count', -1) do
      delete edificio_url(@edificio)
    end

    assert_redirected_to edificios_url
  end
end
