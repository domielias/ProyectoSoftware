require "application_system_test_case"

class DireccionsTest < ApplicationSystemTestCase
  setup do
    @direccion = direccions(:one)
  end

  test "visiting the index" do
    visit direccions_url
    assert_selector "h1", text: "Direccions"
  end

  test "creating a Direccion" do
    visit direccions_url
    click_on "New Direccion"

    fill_in "Calle", with: @direccion.calle
    fill_in "Ciudad", with: @direccion.ciudad
    fill_in "Codigo postal", with: @direccion.codigo_postal
    fill_in "Telefono", with: @direccion.telefono
    click_on "Create Direccion"

    assert_text "Direccion was successfully created"
    click_on "Back"
  end

  test "updating a Direccion" do
    visit direccions_url
    click_on "Edit", match: :first

    fill_in "Calle", with: @direccion.calle
    fill_in "Ciudad", with: @direccion.ciudad
    fill_in "Codigo postal", with: @direccion.codigo_postal
    fill_in "Telefono", with: @direccion.telefono
    click_on "Update Direccion"

    assert_text "Direccion was successfully updated"
    click_on "Back"
  end

  test "destroying a Direccion" do
    visit direccions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Direccion was successfully destroyed"
  end
end
