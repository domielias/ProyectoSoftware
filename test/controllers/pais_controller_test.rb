require 'test_helper'

class PaisControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pai = pais(:one)
  end

  test "should get index" do
    get pais_url
    assert_response :success
  end

  test "should get new" do
    get new_pai_url
    assert_response :success
  end

  test "should create pai" do
    assert_difference('Pai.count') do
      post pais_url, params: { pai: { lugar_nacimiento: @pai.lugar_nacimiento, nacionalidad: @pai.nacionalidad, nombre: @pai.nombre } }
    end

    assert_redirected_to pai_url(Pai.last)
  end

  test "should show pai" do
    get pai_url(@pai)
    assert_response :success
  end

  test "should get edit" do
    get edit_pai_url(@pai)
    assert_response :success
  end

  test "should update pai" do
    patch pai_url(@pai), params: { pai: { lugar_nacimiento: @pai.lugar_nacimiento, nacionalidad: @pai.nacionalidad, nombre: @pai.nombre } }
    assert_redirected_to pai_url(@pai)
  end

  test "should destroy pai" do
    assert_difference('Pai.count', -1) do
      delete pai_url(@pai)
    end

    assert_redirected_to pais_url
  end
end
