class FacultadsController < ApplicationController
  load_and_authorize_resource
  before_action :set_facultad, only: [:show, :edit, :update, :destroy]

  # GET /facultads
  # GET /facultads.json
  def index
    @facultads = Facultad.all
  end

  # GET /facultads/1
  # GET /facultads/1.json
  def show
  end

  # GET /facultads/new
  def new
    @facultad = Facultad.new
  end

  # GET /facultads/1/edit
  def edit
  end

  # POST /facultads
  # POST /facultads.json
  def create
    @facultad = Facultad.new(facultad_params)

    # respond_to do |format|
      if @facultad.save
        redirect_to configuracion_path
        # format.html { redirect_to @facultad, notice: 'Facultad was successfully created.' }
        # format.json { render :show, status: :created, location: @facultad }
      else
        # format.html { render :new }
        # format.json { render json: @facultad.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /facultads/1
  # PATCH/PUT /facultads/1.json
  def update
    respond_to do |format|
      if @facultad.update(facultad_params)
        format.html { redirect_to @facultad, notice: 'Facultad was successfully updated.' }
        format.json { render :show, status: :ok, location: @facultad }
      else
        format.html { render :edit }
        format.json { render json: @facultad.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /facultads/1
  # DELETE /facultads/1.json
  def destroy
    @facultad.destroy
    respond_to do |format|
      format.html { redirect_to facultads_url, notice: 'Facultad was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_facultad
      @facultad = Facultad.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def facultad_params
      params.require(:facultad).permit(:nombre)
    end
end
