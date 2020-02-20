require "application_system_test_case"

class ModalidadsTest < ApplicationSystemTestCase
  setup do
    @modalidad = modalidads(:one)
  end

  test "visiting the index" do
    visit modalidads_url
    assert_selector "h1", text: "Modalidads"
  end

  test "creating a Modalidad" do
    visit modalidads_url
    click_on "New Modalidad"

    fill_in "Nombre", with: @modalidad.nombre
    click_on "Create Modalidad"

    assert_text "Modalidad was successfully created"
    click_on "Back"
  end

  test "updating a Modalidad" do
    visit modalidads_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @modalidad.nombre
    click_on "Update Modalidad"

    assert_text "Modalidad was successfully updated"
    click_on "Back"
  end

  test "destroying a Modalidad" do
    visit modalidads_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Modalidad was successfully destroyed"
  end
end
