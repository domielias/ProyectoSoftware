class ModalidadsController < ApplicationController
  load_and_authorize_resource
  before_action :set_modalidad, only: [:show, :edit, :update, :destroy]

  # GET /modalidads
  # GET /modalidads.json
  def index
    @modalidads = Modalidad.all
  end

  # GET /modalidads/1
  # GET /modalidads/1.json
  def show
  end

  # GET /modalidads/new
  def new
    @modalidad = Modalidad.new
  end

  # GET /modalidads/1/edit
  def edit
  end

  # POST /modalidads
  # POST /modalidads.json
  def create
    @modalidad = Modalidad.new(modalidad_params)

    respond_to do |format|
      if @modalidad.save
        format.html { redirect_to @modalidad, notice: 'Modalidad was successfully created.' }
        format.json { render :show, status: :created, location: @modalidad }
      else
        format.html { render :new }
        format.json { render json: @modalidad.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /modalidads/1
  # PATCH/PUT /modalidads/1.json
  def update
    respond_to do |format|
      if @modalidad.update(modalidad_params)
        format.html { redirect_to @modalidad, notice: 'Modalidad was successfully updated.' }
        format.json { render :show, status: :ok, location: @modalidad }
      else
        format.html { render :edit }
        format.json { render json: @modalidad.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /modalidads/1
  # DELETE /modalidads/1.json
  def destroy
    @modalidad.destroy
    respond_to do |format|
      format.html { redirect_to modalidads_url, notice: 'Modalidad was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_modalidad
      @modalidad = Modalidad.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def modalidad_params
      params.require(:modalidad).permit(:nombre)
    end
end
