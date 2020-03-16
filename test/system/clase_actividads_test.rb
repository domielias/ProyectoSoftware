require "application_system_test_case"

class ClaseActividadsTest < ApplicationSystemTestCase
  setup do
    @clase_actividad = clase_actividads(:one)
  end

  test "visiting the index" do
    visit clase_actividads_url
    assert_selector "h1", text: "Clase Actividads"
  end

  test "creating a Clase actividad" do
    visit clase_actividads_url
    click_on "New Clase Actividad"

    fill_in "Actividad", with: @clase_actividad.actividad_id
    fill_in "Clase", with: @clase_actividad.clase_id
    click_on "Create Clase actividad"

    assert_text "Clase actividad was successfully created"
    click_on "Back"
  end

  test "updating a Clase actividad" do
    visit clase_actividads_url
    click_on "Edit", match: :first

    fill_in "Actividad", with: @clase_actividad.actividad_id
    fill_in "Clase", with: @clase_actividad.clase_id
    click_on "Update Clase actividad"

    assert_text "Clase actividad was successfully updated"
    click_on "Back"
  end

  test "destroying a Clase actividad" do
    visit clase_actividads_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Clase actividad was successfully destroyed"
  end
end
