require "application_system_test_case"

class TutoriesTest < ApplicationSystemTestCase
  setup do
    @tutory = tutories(:one)
  end

  test "visiting the index" do
    visit tutories_url
    assert_selector "h1", text: "Tutories"
  end

  test "creating a Tutory" do
    visit tutories_url
    click_on "New Tutory"

    fill_in "Aula", with: @tutory.aula_id
    fill_in "Clase", with: @tutory.clase_id
    fill_in "Profesor", with: @tutory.profesor_id
    click_on "Create Tutory"

    assert_text "Tutory was successfully created"
    click_on "Back"
  end

  test "updating a Tutory" do
    visit tutories_url
    click_on "Edit", match: :first

    fill_in "Aula", with: @tutory.aula_id
    fill_in "Clase", with: @tutory.clase_id
    fill_in "Profesor", with: @tutory.profesor_id
    click_on "Update Tutory"

    assert_text "Tutory was successfully updated"
    click_on "Back"
  end

  test "destroying a Tutory" do
    visit tutories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tutory was successfully destroyed"
  end
end
