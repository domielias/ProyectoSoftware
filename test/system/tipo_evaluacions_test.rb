require "application_system_test_case"

class TipoEvaluacionsTest < ApplicationSystemTestCase
  setup do
    @tipo_evaluacion = tipo_evaluacions(:one)
  end

  test "visiting the index" do
    visit tipo_evaluacions_url
    assert_selector "h1", text: "Tipo Evaluacions"
  end

  test "creating a Tipo evaluacion" do
    visit tipo_evaluacions_url
    click_on "New Tipo Evaluacion"

    fill_in "Nombre", with: @tipo_evaluacion.nombre
    click_on "Create Tipo evaluacion"

    assert_text "Tipo evaluacion was successfully created"
    click_on "Back"
  end

  test "updating a Tipo evaluacion" do
    visit tipo_evaluacions_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @tipo_evaluacion.nombre
    click_on "Update Tipo evaluacion"

    assert_text "Tipo evaluacion was successfully updated"
    click_on "Back"
  end

  test "destroying a Tipo evaluacion" do
    visit tipo_evaluacions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tipo evaluacion was successfully destroyed"
  end
end
