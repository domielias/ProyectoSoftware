require 'test_helper'

class ProgramaEpeSolicitadosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @programa_epe_solicitado = programa_epe_solicitados(:one)
  end

  test "should get index" do
    get programa_epe_solicitados_url
    assert_response :success
  end

  test "should get new" do
    get new_programa_epe_solicitado_url
    assert_response :success
  end

  test "should create programa_epe_solicitado" do
    assert_difference('ProgramaEpeSolicitado.count') do
      post programa_epe_solicitados_url, params: { programa_epe_solicitado: {  } }
    end

    assert_redirected_to programa_epe_solicitado_url(ProgramaEpeSolicitado.last)
  end

  test "should show programa_epe_solicitado" do
    get programa_epe_solicitado_url(@programa_epe_solicitado)
    assert_response :success
  end

  test "should get edit" do
    get edit_programa_epe_solicitado_url(@programa_epe_solicitado)
    assert_response :success
  end

  test "should update programa_epe_solicitado" do
    patch programa_epe_solicitado_url(@programa_epe_solicitado), params: { programa_epe_solicitado: {  } }
    assert_redirected_to programa_epe_solicitado_url(@programa_epe_solicitado)
  end

  test "should destroy programa_epe_solicitado" do
    assert_difference('ProgramaEpeSolicitado.count', -1) do
      delete programa_epe_solicitado_url(@programa_epe_solicitado)
    end

    assert_redirected_to programa_epe_solicitados_url
  end
end
