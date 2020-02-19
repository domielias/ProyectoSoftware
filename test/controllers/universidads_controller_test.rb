require 'test_helper'

class UniversidadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @universidad = universidads(:one)
  end

  test "should get index" do
    get universidads_url
    assert_response :success
  end

  test "should get new" do
    get new_universidad_url
    assert_response :success
  end

  test "should create universidad" do
    assert_difference('Universidad.count') do
      post universidads_url, params: { universidad: { nombre: @universidad.nombre } }
    end

    assert_redirected_to universidad_url(Universidad.last)
  end

  test "should show universidad" do
    get universidad_url(@universidad)
    assert_response :success
  end

  test "should get edit" do
    get edit_universidad_url(@universidad)
    assert_response :success
  end

  test "should update universidad" do
    patch universidad_url(@universidad), params: { universidad: { nombre: @universidad.nombre } }
    assert_redirected_to universidad_url(@universidad)
  end

  test "should destroy universidad" do
    assert_difference('Universidad.count', -1) do
      delete universidad_url(@universidad)
    end

    assert_redirected_to universidads_url
  end
end
