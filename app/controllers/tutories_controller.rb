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

    respond_to do |format|
      if @tutory.save
        format.html { redirect_to @tutory, notice: 'Tutory was successfully created.' }
        format.json { render :show, status: :created, location: @tutory }
      else
        format.html { render :new }
        format.json { render json: @tutory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tutories/1
  # PATCH/PUT /tutories/1.json
  def update
    respond_to do |format|
      if @tutory.update(tutory_params)
        format.html { redirect_to @tutory, notice: 'Tutory was successfully updated.' }
        format.json { render :show, status: :ok, location: @tutory }
      else
        format.html { render :edit }
        format.json { render json: @tutory.errors, status: :unprocessable_entity }
      end
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
      params.require(:tutory).permit(:profesor_id, :clase_id)
    end
end
