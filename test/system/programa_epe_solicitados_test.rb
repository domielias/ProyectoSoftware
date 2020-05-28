require "application_system_test_case"

class ProgramaEpeSolicitadosTest < ApplicationSystemTestCase
  setup do
    @programa_epe_solicitado = programa_epe_solicitados(:one)
  end

  test "visiting the index" do
    visit programa_epe_solicitados_url
    assert_selector "h1", text: "Programa Epe Solicitados"
  end

  test "creating a Programa epe solicitado" do
    visit programa_epe_solicitados_url
    click_on "New Programa Epe Solicitado"

    click_on "Create Programa epe solicitado"

    assert_text "Programa epe solicitado was successfully created"
    click_on "Back"
  end

  test "updating a Programa epe solicitado" do
    visit programa_epe_solicitados_url
    click_on "Edit", match: :first

    click_on "Update Programa epe solicitado"

    assert_text "Programa epe solicitado was successfully updated"
    click_on "Back"
  end

  test "destroying a Programa epe solicitado" do
    visit programa_epe_solicitados_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Programa epe solicitado was successfully destroyed"
  end
end
