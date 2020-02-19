require "application_system_test_case"

class TemporadasTest < ApplicationSystemTestCase
  setup do
    @temporada = temporadas(:one)
  end

  test "visiting the index" do
    visit temporadas_url
    assert_selector "h1", text: "Temporadas"
  end

  test "creating a Temporada" do
    visit temporadas_url
    click_on "New Temporada"

    fill_in "Nombre", with: @temporada.nombre
    click_on "Create Temporada"

    assert_text "Temporada was successfully created"
    click_on "Back"
  end

  test "updating a Temporada" do
    visit temporadas_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @temporada.nombre
    click_on "Update Temporada"

    assert_text "Temporada was successfully updated"
    click_on "Back"
  end

  test "destroying a Temporada" do
    visit temporadas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Temporada was successfully destroyed"
  end
end
