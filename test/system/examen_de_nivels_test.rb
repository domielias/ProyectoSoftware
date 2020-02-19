require "application_system_test_case"

class ExamenDeNivelsTest < ApplicationSystemTestCase
  setup do
    @examen_de_nivel = examen_de_nivels(:one)
  end

  test "visiting the index" do
    visit examen_de_nivels_url
    assert_selector "h1", text: "Examen De Nivels"
  end

  test "creating a Examen de nivel" do
    visit examen_de_nivels_url
    click_on "New Examen De Nivel"

    fill_in "Promedio", with: @examen_de_nivel.promedio
    click_on "Create Examen de nivel"

    assert_text "Examen de nivel was successfully created"
    click_on "Back"
  end

  test "updating a Examen de nivel" do
    visit examen_de_nivels_url
    click_on "Edit", match: :first

    fill_in "Promedio", with: @examen_de_nivel.promedio
    click_on "Update Examen de nivel"

    assert_text "Examen de nivel was successfully updated"
    click_on "Back"
  end

  test "destroying a Examen de nivel" do
    visit examen_de_nivels_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Examen de nivel was successfully destroyed"
  end
end
