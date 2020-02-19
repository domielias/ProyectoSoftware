require "application_system_test_case"

class ProgramaInternacionalsTest < ApplicationSystemTestCase
  setup do
    @programa_internacional = programa_internacionals(:one)
  end

  test "visiting the index" do
    visit programa_internacionals_url
    assert_selector "h1", text: "Programa Internacionals"
  end

  test "creating a Programa internacional" do
    visit programa_internacionals_url
    click_on "New Programa Internacional"

    fill_in "Nombre", with: @programa_internacional.nombre
    click_on "Create Programa internacional"

    assert_text "Programa internacional was successfully created"
    click_on "Back"
  end

  test "updating a Programa internacional" do
    visit programa_internacionals_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @programa_internacional.nombre
    click_on "Update Programa internacional"

    assert_text "Programa internacional was successfully updated"
    click_on "Back"
  end

  test "destroying a Programa internacional" do
    visit programa_internacionals_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Programa internacional was successfully destroyed"
  end
end
