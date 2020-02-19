require "application_system_test_case"

class UniversidadsTest < ApplicationSystemTestCase
  setup do
    @universidad = universidads(:one)
  end

  test "visiting the index" do
    visit universidads_url
    assert_selector "h1", text: "Universidads"
  end

  test "creating a Universidad" do
    visit universidads_url
    click_on "New Universidad"

    fill_in "Nombre", with: @universidad.nombre
    click_on "Create Universidad"

    assert_text "Universidad was successfully created"
    click_on "Back"
  end

  test "updating a Universidad" do
    visit universidads_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @universidad.nombre
    click_on "Update Universidad"

    assert_text "Universidad was successfully updated"
    click_on "Back"
  end

  test "destroying a Universidad" do
    visit universidads_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Universidad was successfully destroyed"
  end
end
