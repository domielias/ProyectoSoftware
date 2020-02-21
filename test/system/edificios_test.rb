require "application_system_test_case"

class EdificiosTest < ApplicationSystemTestCase
  setup do
    @edificio = edificios(:one)
  end

  test "visiting the index" do
    visit edificios_url
    assert_selector "h1", text: "Edificios"
  end

  test "creating a Edificio" do
    visit edificios_url
    click_on "New Edificio"

    fill_in "Abreviatura", with: @edificio.abreviatura
    fill_in "Nombre", with: @edificio.nombre
    click_on "Create Edificio"

    assert_text "Edificio was successfully created"
    click_on "Back"
  end

  test "updating a Edificio" do
    visit edificios_url
    click_on "Edit", match: :first

    fill_in "Abreviatura", with: @edificio.abreviatura
    fill_in "Nombre", with: @edificio.nombre
    click_on "Update Edificio"

    assert_text "Edificio was successfully updated"
    click_on "Back"
  end

  test "destroying a Edificio" do
    visit edificios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Edificio was successfully destroyed"
  end
end
