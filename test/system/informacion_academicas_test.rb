require "application_system_test_case"

class InformacionAcademicasTest < ApplicationSystemTestCase
  setup do
    @informacion_academica = informacion_academicas(:one)
  end

  test "visiting the index" do
    visit informacion_academicas_url
    assert_selector "h1", text: "Informacion Academicas"
  end

  test "creating a Informacion academica" do
    visit informacion_academicas_url
    click_on "New Informacion Academica"

    fill_in "Asignaturas de espanol recientes", with: @informacion_academica.asignaturas_de_espanol_recientes
    fill_in "Cantidad de anos de espanol estudiadas", with: @informacion_academica.cantidad_de_anos_de_espanol_estudiadas
    fill_in "Cantidad de horas de espanol cursadas", with: @informacion_academica.cantidad_de_horas_de_espanol_cursadas
    fill_in "Nivel alcanzado", with: @informacion_academica.nivel_alcanzado
    click_on "Create Informacion academica"

    assert_text "Informacion academica was successfully created"
    click_on "Back"
  end

  test "updating a Informacion academica" do
    visit informacion_academicas_url
    click_on "Edit", match: :first

    fill_in "Asignaturas de espanol recientes", with: @informacion_academica.asignaturas_de_espanol_recientes
    fill_in "Cantidad de anos de espanol estudiadas", with: @informacion_academica.cantidad_de_anos_de_espanol_estudiadas
    fill_in "Cantidad de horas de espanol cursadas", with: @informacion_academica.cantidad_de_horas_de_espanol_cursadas
    fill_in "Nivel alcanzado", with: @informacion_academica.nivel_alcanzado
    click_on "Update Informacion academica"

    assert_text "Informacion academica was successfully updated"
    click_on "Back"
  end

  test "destroying a Informacion academica" do
    visit informacion_academicas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Informacion academica was successfully destroyed"
  end
end
