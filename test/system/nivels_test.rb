require "application_system_test_case"

class NivelsTest < ApplicationSystemTestCase
  setup do
    @nivel = nivels(:one)
  end

  test "visiting the index" do
    visit nivels_url
    assert_selector "h1", text: "Nivels"
  end

  test "creating a Nivel" do
    visit nivels_url
    click_on "New Nivel"

    fill_in "Nombre", with: @nivel.nombre
    fill_in "Rango max", with: @nivel.rango_max
    fill_in "Rango min", with: @nivel.rango_min
    click_on "Create Nivel"

    assert_text "Nivel was successfully created"
    click_on "Back"
  end

  test "updating a Nivel" do
    visit nivels_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @nivel.nombre
    fill_in "Rango max", with: @nivel.rango_max
    fill_in "Rango min", with: @nivel.rango_min
    click_on "Update Nivel"

    assert_text "Nivel was successfully updated"
    click_on "Back"
  end

  test "destroying a Nivel" do
    visit nivels_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Nivel was successfully destroyed"
  end
end
