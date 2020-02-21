require 'test_helper'

class TutoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tutory = tutories(:one)
  end

  test "should get index" do
    get tutories_url
    assert_response :success
  end

  test "should get new" do
    get new_tutory_url
    assert_response :success
  end

  test "should create tutory" do
    assert_difference('Tutory.count') do
      post tutories_url, params: { tutory: { aula_id: @tutory.aula_id, clase_id: @tutory.clase_id, profesor_id: @tutory.profesor_id } }
    end

    assert_redirected_to tutory_url(Tutory.last)
  end

  test "should show tutory" do
    get tutory_url(@tutory)
    assert_response :success
  end

  test "should get edit" do
    get edit_tutory_url(@tutory)
    assert_response :success
  end

  test "should update tutory" do
    patch tutory_url(@tutory), params: { tutory: { aula_id: @tutory.aula_id, clase_id: @tutory.clase_id, profesor_id: @tutory.profesor_id } }
    assert_redirected_to tutory_url(@tutory)
  end

  test "should destroy tutory" do
    assert_difference('Tutory.count', -1) do
      delete tutory_url(@tutory)
    end

    assert_redirected_to tutories_url
  end
end
