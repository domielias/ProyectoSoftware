require 'test_helper'

class ProgramaInternacionalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @programa_internacional = programa_internacionals(:one)
  end

  test "should get index" do
    get programa_internacionals_url
    assert_response :success
  end

  test "should get new" do
    get new_programa_internacional_url
    assert_response :success
  end

  test "should create programa_internacional" do
    assert_difference('ProgramaInternacional.count') do
      post programa_internacionals_url, params: { programa_internacional: { nombre: @programa_internacional.nombre } }
    end

    assert_redirected_to programa_internacional_url(ProgramaInternacional.last)
  end

  test "should show programa_internacional" do
    get programa_internacional_url(@programa_internacional)
    assert_response :success
  end

  test "should get edit" do
    get edit_programa_internacional_url(@programa_internacional)
    assert_response :success
  end

  test "should update programa_internacional" do
    patch programa_internacional_url(@programa_internacional), params: { programa_internacional: { nombre: @programa_internacional.nombre } }
    assert_redirected_to programa_internacional_url(@programa_internacional)
  end

  test "should destroy programa_internacional" do
    assert_difference('ProgramaInternacional.count', -1) do
      delete programa_internacional_url(@programa_internacional)
    end

    assert_redirected_to programa_internacionals_url
  end
end
