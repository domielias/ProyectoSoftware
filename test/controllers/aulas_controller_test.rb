require 'test_helper'

class AulasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @aula = aulas(:one)
  end

  test "should get index" do
    get aulas_url
    assert_response :success
  end

  test "should get new" do
    get new_aula_url
    assert_response :success
  end

  test "should create aula" do
    assert_difference('Aula.count') do
      post aulas_url, params: { aula: { nombre: @aula.nombre } }
    end

    assert_redirected_to aula_url(Aula.last)
  end

  test "should show aula" do
    get aula_url(@aula)
    assert_response :success
  end

  test "should get edit" do
    get edit_aula_url(@aula)
    assert_response :success
  end

  test "should update aula" do
    patch aula_url(@aula), params: { aula: { nombre: @aula.nombre } }
    assert_redirected_to aula_url(@aula)
  end

  test "should destroy aula" do
    assert_difference('Aula.count', -1) do
      delete aula_url(@aula)
    end

    assert_redirected_to aulas_url
  end
end
