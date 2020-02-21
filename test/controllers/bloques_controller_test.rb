require 'test_helper'

class BloquesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bloque = bloques(:one)
  end

  test "should get index" do
    get bloques_url
    assert_response :success
  end

  test "should get new" do
    get new_bloque_url
    assert_response :success
  end

  test "should create bloque" do
    assert_difference('Bloque.count') do
      post bloques_url, params: { bloque: { fecha_final: @bloque.fecha_final, fecha_inicio: @bloque.fecha_inicio } }
    end

    assert_redirected_to bloque_url(Bloque.last)
  end

  test "should show bloque" do
    get bloque_url(@bloque)
    assert_response :success
  end

  test "should get edit" do
    get edit_bloque_url(@bloque)
    assert_response :success
  end

  test "should update bloque" do
    patch bloque_url(@bloque), params: { bloque: { fecha_final: @bloque.fecha_final, fecha_inicio: @bloque.fecha_inicio } }
    assert_redirected_to bloque_url(@bloque)
  end

  test "should destroy bloque" do
    assert_difference('Bloque.count', -1) do
      delete bloque_url(@bloque)
    end

    assert_redirected_to bloques_url
  end
end
