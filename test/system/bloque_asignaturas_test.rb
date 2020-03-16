require "application_system_test_case"

class BloqueAsignaturasTest < ApplicationSystemTestCase
  setup do
    @bloque_asignatura = bloque_asignaturas(:one)
  end

  test "visiting the index" do
    visit bloque_asignaturas_url
    assert_selector "h1", text: "Bloque Asignaturas"
  end

  test "creating a Bloque asignatura" do
    visit bloque_asignaturas_url
    click_on "New Bloque Asignatura"

    fill_in "Asignatura", with: @bloque_asignatura.asignatura_id
    fill_in "Bloque", with: @bloque_asignatura.bloque_id
    click_on "Create Bloque asignatura"

    assert_text "Bloque asignatura was successfully created"
    click_on "Back"
  end

  test "updating a Bloque asignatura" do
    visit bloque_asignaturas_url
    click_on "Edit", match: :first

    fill_in "Asignatura", with: @bloque_asignatura.asignatura_id
    fill_in "Bloque", with: @bloque_asignatura.bloque_id
    click_on "Update Bloque asignatura"

    assert_text "Bloque asignatura was successfully updated"
    click_on "Back"
  end

  test "destroying a Bloque asignatura" do
    visit bloque_asignaturas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Bloque asignatura was successfully destroyed"
  end
end
