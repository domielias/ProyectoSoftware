class TutoriesController < ApplicationController
  load_and_authorize_resource
  before_action :set_tutory, only: [:show, :edit, :update, :destroy]

  # GET /tutories
  # GET /tutories.json
  def index
    @tutories = Tutory.all
  end

  # GET /tutories/1
  # GET /tutories/1.json
  def show
  end

  # GET /tutories/new
  def new
    @tutory = Tutory.new
  end

  # GET /tutories/1/edit
  def edit
  end

  # POST /tutories
  # POST /tutories.json
  def create
    @tutory = Tutory.new(tutory_params)

    if @tutory.save
      redirect_to tutories_url
    else
      format.html { render :new }
    end

  end

  # PATCH/PUT /tutories/1
  # PATCH/PUT /tutories/1.json
  def update

    if @tutory.update(tutory_params)
      redirect_to tutories_url
    else
      format.html { render :new }
    end

  end

  # DELETE /tutories/1
  # DELETE /tutories/1.json
  def destroy
    @tutory.destroy
    respond_to do |format|
      format.html { redirect_to tutories_url, notice: 'Tutory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tutory
      @tutory = Tutory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tutory_params
      params.require(:tutory).permit(:ubicacion, :clase_id, :user_id, horarios_attributes: [:id, :dias, :start, :end, :_destroy])
    end
end
