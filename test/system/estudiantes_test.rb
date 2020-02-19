require "application_system_test_case"

class EstudiantesTest < ApplicationSystemTestCase
  setup do
    @estudiante = estudiantes(:one)
  end

  test "visiting the index" do
    visit estudiantes_url
    assert_selector "h1", text: "Estudiantes"
  end

  test "creating a Estudiante" do
    visit estudiantes_url
    click_on "New Estudiante"

    check "Egresado" if @estudiante.egresado
    fill_in "Estado civil", with: @estudiante.estado_civil
    fill_in "Id campus", with: @estudiante.id_campus
    fill_in "Matricula", with: @estudiante.matricula
    fill_in "Nombre conyugue", with: @estudiante.nombre_conyugue
    fill_in "Numero residencia", with: @estudiante.numero_residencia
    fill_in "Pasaporte", with: @estudiante.pasaporte
    fill_in "Sexo", with: @estudiante.sexo
    fill_in "Tiempo residencia", with: @estudiante.tiempo_residencia
    click_on "Create Estudiante"

    assert_text "Estudiante was successfully created"
    click_on "Back"
  end

  test "updating a Estudiante" do
    visit estudiantes_url
    click_on "Edit", match: :first

    check "Egresado" if @estudiante.egresado
    fill_in "Estado civil", with: @estudiante.estado_civil
    fill_in "Id campus", with: @estudiante.id_campus
    fill_in "Matricula", with: @estudiante.matricula
    fill_in "Nombre conyugue", with: @estudiante.nombre_conyugue
    fill_in "Numero residencia", with: @estudiante.numero_residencia
    fill_in "Pasaporte", with: @estudiante.pasaporte
    fill_in "Sexo", with: @estudiante.sexo
    fill_in "Tiempo residencia", with: @estudiante.tiempo_residencia
    click_on "Update Estudiante"

    assert_text "Estudiante was successfully updated"
    click_on "Back"
  end

  test "destroying a Estudiante" do
    visit estudiantes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Estudiante was successfully destroyed"
  end
end
