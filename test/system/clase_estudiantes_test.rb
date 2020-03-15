require "application_system_test_case"

class ClaseEstudiantesTest < ApplicationSystemTestCase
  setup do
    @clase_estudiante = clase_estudiantes(:one)
  end

  test "visiting the index" do
    visit clase_estudiantes_url
    assert_selector "h1", text: "Clase Estudiantes"
  end

  test "creating a Clase estudiante" do
    visit clase_estudiantes_url
    click_on "New Clase Estudiante"

    fill_in "Clase", with: @clase_estudiante.clase_id
    fill_in "Estudiante", with: @clase_estudiante.estudiante_id
    click_on "Create Clase estudiante"

    assert_text "Clase estudiante was successfully created"
    click_on "Back"
  end

  test "updating a Clase estudiante" do
    visit clase_estudiantes_url
    click_on "Edit", match: :first

    fill_in "Clase", with: @clase_estudiante.clase_id
    fill_in "Estudiante", with: @clase_estudiante.estudiante_id
    click_on "Update Clase estudiante"

    assert_text "Clase estudiante was successfully updated"
    click_on "Back"
  end

  test "destroying a Clase estudiante" do
    visit clase_estudiantes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Clase estudiante was successfully destroyed"
  end
end
