require 'test_helper'

class ExamenDeNivelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @examen_de_nivel = examen_de_nivels(:one)
  end

  test "should get index" do
    get examen_de_nivels_url
    assert_response :success
  end

  test "should get new" do
    get new_examen_de_nivel_url
    assert_response :success
  end

  test "should create examen_de_nivel" do
    assert_difference('ExamenDeNivel.count') do
      post examen_de_nivels_url, params: { examen_de_nivel: { promedio: @examen_de_nivel.promedio } }
    end

    assert_redirected_to examen_de_nivel_url(ExamenDeNivel.last)
  end

  test "should show examen_de_nivel" do
    get examen_de_nivel_url(@examen_de_nivel)
    assert_response :success
  end

  test "should get edit" do
    get edit_examen_de_nivel_url(@examen_de_nivel)
    assert_response :success
  end

  test "should update examen_de_nivel" do
    patch examen_de_nivel_url(@examen_de_nivel), params: { examen_de_nivel: { promedio: @examen_de_nivel.promedio } }
    assert_redirected_to examen_de_nivel_url(@examen_de_nivel)
  end

  test "should destroy examen_de_nivel" do
    assert_difference('ExamenDeNivel.count', -1) do
      delete examen_de_nivel_url(@examen_de_nivel)
    end

    assert_redirected_to examen_de_nivels_url
  end
end
