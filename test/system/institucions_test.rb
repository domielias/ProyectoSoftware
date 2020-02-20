require "application_system_test_case"

class InstitucionsTest < ApplicationSystemTestCase
  setup do
    @institucion = institucions(:one)
  end

  test "visiting the index" do
    visit institucions_url
    assert_selector "h1", text: "Institucions"
  end

  test "creating a Institucion" do
    visit institucions_url
    click_on "New Institucion"

    fill_in "Nombre", with: @institucion.nombre
    click_on "Create Institucion"

    assert_text "Institucion was successfully created"
    click_on "Back"
  end

  test "updating a Institucion" do
    visit institucions_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @institucion.nombre
    click_on "Update Institucion"

    assert_text "Institucion was successfully updated"
    click_on "Back"
  end

  test "destroying a Institucion" do
    visit institucions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Institucion was successfully destroyed"
  end
end
