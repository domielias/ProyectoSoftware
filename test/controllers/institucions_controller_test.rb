require 'test_helper'

class InstitucionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @institucion = institucions(:one)
  end

  test "should get index" do
    get institucions_url
    assert_response :success
  end

  test "should get new" do
    get new_institucion_url
    assert_response :success
  end

  test "should create institucion" do
    assert_difference('Institucion.count') do
      post institucions_url, params: { institucion: { nombre: @institucion.nombre } }
    end

    assert_redirected_to institucion_url(Institucion.last)
  end

  test "should show institucion" do
    get institucion_url(@institucion)
    assert_response :success
  end

  test "should get edit" do
    get edit_institucion_url(@institucion)
    assert_response :success
  end

  test "should update institucion" do
    patch institucion_url(@institucion), params: { institucion: { nombre: @institucion.nombre } }
    assert_redirected_to institucion_url(@institucion)
  end

  test "should destroy institucion" do
    assert_difference('Institucion.count', -1) do
      delete institucion_url(@institucion)
    end

    assert_redirected_to institucions_url
  end
end
