require "application_system_test_case"

class PersonasTest < ApplicationSystemTestCase
  setup do
    @persona = personas(:one)
  end

  test "visiting the index" do
    visit personas_url
    assert_selector "h1", text: "Personas"
  end

  test "creating a Persona" do
    visit personas_url
    click_on "New Persona"

    fill_in "Apellidos", with: @persona.apellidos
    fill_in "Correo electronico", with: @persona.correo_electronico
    fill_in "Fecha nacimiento", with: @persona.fecha_nacimiento
    fill_in "Lugar nacimiento persona", with: @persona.lugar_nacimiento_persona_id
    fill_in "Nombres", with: @persona.nombres
    fill_in "Puesto", with: @persona.puesto
    fill_in "Residencia persona", with: @persona.residencia_persona_id
    click_on "Create Persona"

    assert_text "Persona was successfully created"
    click_on "Back"
  end

  test "updating a Persona" do
    visit personas_url
    click_on "Edit", match: :first

    fill_in "Apellidos", with: @persona.apellidos
    fill_in "Correo electronico", with: @persona.correo_electronico
    fill_in "Fecha nacimiento", with: @persona.fecha_nacimiento
    fill_in "Lugar nacimiento persona", with: @persona.lugar_nacimiento_persona_id
    fill_in "Nombres", with: @persona.nombres
    fill_in "Puesto", with: @persona.puesto
    fill_in "Residencia persona", with: @persona.residencia_persona_id
    click_on "Update Persona"

    assert_text "Persona was successfully updated"
    click_on "Back"
  end

  test "destroying a Persona" do
    visit personas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Persona was successfully destroyed"
  end
end
