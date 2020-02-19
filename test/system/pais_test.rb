require "application_system_test_case"

class PaisTest < ApplicationSystemTestCase
  setup do
    @pai = pais(:one)
  end

  test "visiting the index" do
    visit pais_url
    assert_selector "h1", text: "Pais"
  end

  test "creating a Pai" do
    visit pais_url
    click_on "New Pai"

    fill_in "Nacionalidad", with: @pai.nacionalidad
    fill_in "Nombre", with: @pai.nombre
    click_on "Create Pai"

    assert_text "Pai was successfully created"
    click_on "Back"
  end

  test "updating a Pai" do
    visit pais_url
    click_on "Edit", match: :first

    fill_in "Nacionalidad", with: @pai.nacionalidad
    fill_in "Nombre", with: @pai.nombre
    click_on "Update Pai"

    assert_text "Pai was successfully updated"
    click_on "Back"
  end

  test "destroying a Pai" do
    visit pais_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Pai was successfully destroyed"
  end
end
