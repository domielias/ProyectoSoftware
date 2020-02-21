require 'test_helper'

class ModalidadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @modalidad = modalidads(:one)
  end

  test "should get index" do
    get modalidads_url
    assert_response :success
  end

  test "should get new" do
    get new_modalidad_url
    assert_response :success
  end

  test "should create modalidad" do
    assert_difference('Modalidad.count') do
      post modalidads_url, params: { modalidad: { nombre: @modalidad.nombre } }
    end

    assert_redirected_to modalidad_url(Modalidad.last)
  end

  test "should show modalidad" do
    get modalidad_url(@modalidad)
    assert_response :success
  end

  test "should get edit" do
    get edit_modalidad_url(@modalidad)
    assert_response :success
  end

  test "should update modalidad" do
    patch modalidad_url(@modalidad), params: { modalidad: { nombre: @modalidad.nombre } }
    assert_redirected_to modalidad_url(@modalidad)
  end

  test "should destroy modalidad" do
    assert_difference('Modalidad.count', -1) do
      delete modalidad_url(@modalidad)
    end

    assert_redirected_to modalidads_url
  end
end
