require "application_system_test_case"

class CarreraSolicitadasTest < ApplicationSystemTestCase
  setup do
    @carrera_solicitada = carrera_solicitadas(:one)
  end

  test "visiting the index" do
    visit carrera_solicitadas_url
    assert_selector "h1", text: "Carrera Solicitadas"
  end

  test "creating a Carrera solicitada" do
    visit carrera_solicitadas_url
    click_on "New Carrera Solicitada"

    fill_in "Nombre", with: @carrera_solicitada.nombre
    click_on "Create Carrera solicitada"

    assert_text "Carrera solicitada was successfully created"
    click_on "Back"
  end

  test "updating a Carrera solicitada" do
    visit carrera_solicitadas_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @carrera_solicitada.nombre
    click_on "Update Carrera solicitada"

    assert_text "Carrera solicitada was successfully updated"
    click_on "Back"
  end

  test "destroying a Carrera solicitada" do
    visit carrera_solicitadas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Carrera solicitada was successfully destroyed"
  end
end
