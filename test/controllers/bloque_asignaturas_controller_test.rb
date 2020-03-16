require 'test_helper'

class BloqueAsignaturasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bloque_asignatura = bloque_asignaturas(:one)
  end

  test "should get index" do
    get bloque_asignaturas_url
    assert_response :success
  end

  test "should get new" do
    get new_bloque_asignatura_url
    assert_response :success
  end

  test "should create bloque_asignatura" do
    assert_difference('BloqueAsignatura.count') do
      post bloque_asignaturas_url, params: { bloque_asignatura: { asignatura_id: @bloque_asignatura.asignatura_id, bloque_id: @bloque_asignatura.bloque_id } }
    end

    assert_redirected_to bloque_asignatura_url(BloqueAsignatura.last)
  end

  test "should show bloque_asignatura" do
    get bloque_asignatura_url(@bloque_asignatura)
    assert_response :success
  end

  test "should get edit" do
    get edit_bloque_asignatura_url(@bloque_asignatura)
    assert_response :success
  end

  test "should update bloque_asignatura" do
    patch bloque_asignatura_url(@bloque_asignatura), params: { bloque_asignatura: { asignatura_id: @bloque_asignatura.asignatura_id, bloque_id: @bloque_asignatura.bloque_id } }
    assert_redirected_to bloque_asignatura_url(@bloque_asignatura)
  end

  test "should destroy bloque_asignatura" do
    assert_difference('BloqueAsignatura.count', -1) do
      delete bloque_asignatura_url(@bloque_asignatura)
    end

    assert_redirected_to bloque_asignaturas_url
  end
end
