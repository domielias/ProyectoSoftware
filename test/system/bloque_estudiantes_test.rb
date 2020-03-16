require "application_system_test_case"

class BloqueEstudiantesTest < ApplicationSystemTestCase
  setup do
    @bloque_estudiante = bloque_estudiantes(:one)
  end

  test "visiting the index" do
    visit bloque_estudiantes_url
    assert_selector "h1", text: "Bloque Estudiantes"
  end

  test "creating a Bloque estudiante" do
    visit bloque_estudiantes_url
    click_on "New Bloque Estudiante"

    fill_in "Bloque", with: @bloque_estudiante.bloque_id
    fill_in "Estudiante", with: @bloque_estudiante.estudiante_id
    click_on "Create Bloque estudiante"

    assert_text "Bloque estudiante was successfully created"
    click_on "Back"
  end

  test "updating a Bloque estudiante" do
    visit bloque_estudiantes_url
    click_on "Edit", match: :first

    fill_in "Bloque", with: @bloque_estudiante.bloque_id
    fill_in "Estudiante", with: @bloque_estudiante.estudiante_id
    click_on "Update Bloque estudiante"

    assert_text "Bloque estudiante was successfully updated"
    click_on "Back"
  end

  test "destroying a Bloque estudiante" do
    visit bloque_estudiantes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Bloque estudiante was successfully destroyed"
  end
end
