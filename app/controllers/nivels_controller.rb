class NivelsController < ApplicationController
  load_and_authorize_resource
  before_action :set_nivel, only: [:show, :edit, :update, :destroy]

  # GET /nivels
  # GET /nivels.json
  def index
    @nivels = Nivel.all
  end

  # GET /nivels/1
  # GET /nivels/1.json
  def show
  end

  # GET /nivels/new
  def new
    @nivel = Nivel.new
  end

  # GET /nivels/1/edit
  def edit
  end

  # POST /nivels
  # POST /nivels.json
  def create
    @nivel = Nivel.new(nivel_params)

    # respond_to do |format|
      if @nivel.save
        redirect_to configuracion_path
        # format.html { redirect_to @nivel, notice: 'Nivel was successfully created.' }
        # format.json { render :show, status: :created, location: @nivel }
      else
        # format.html { render :new }
        # format.json { render json: @nivel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nivels/1
  # PATCH/PUT /nivels/1.json
  def update
    respond_to do |format|
      if @nivel.update(nivel_params)
        format.html { redirect_to @nivel, notice: 'Nivel was successfully updated.' }
        format.json { render :show, status: :ok, location: @nivel }
      else
        format.html { render :edit }
        format.json { render json: @nivel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nivels/1
  # DELETE /nivels/1.json
  def destroy
    @nivel.destroy
    respond_to do |format|
      format.html { redirect_to nivels_url, notice: 'Nivel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nivel
      @nivel = Nivel.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def nivel_params
      params.require(:nivel).permit(:nombre,:programa_epe_solicitado_id,:min,:max)
    end
end
