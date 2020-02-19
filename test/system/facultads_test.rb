require "application_system_test_case"

class FacultadsTest < ApplicationSystemTestCase
  setup do
    @facultad = facultads(:one)
  end

  test "visiting the index" do
    visit facultads_url
    assert_selector "h1", text: "Facultads"
  end

  test "creating a Facultad" do
    visit facultads_url
    click_on "New Facultad"

    fill_in "Nombre", with: @facultad.nombre
    click_on "Create Facultad"

    assert_text "Facultad was successfully created"
    click_on "Back"
  end

  test "updating a Facultad" do
    visit facultads_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @facultad.nombre
    click_on "Update Facultad"

    assert_text "Facultad was successfully updated"
    click_on "Back"
  end

  test "destroying a Facultad" do
    visit facultads_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Facultad was successfully destroyed"
  end
end
