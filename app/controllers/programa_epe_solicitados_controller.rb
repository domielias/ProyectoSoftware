class ProgramaEpeSolicitadosController < ApplicationController
  before_action :set_programa_epe_solicitado, only: [:show, :edit, :update, :destroy]

  # GET /programa_epe_solicitados
  # GET /programa_epe_solicitados.json
  def index
    @programa_epe_solicitados = ProgramaEpeSolicitado.all
  end

  # GET /programa_epe_solicitados/1
  # GET /programa_epe_solicitados/1.json
  def show
  end

  # GET /programa_epe_solicitados/new
  def new
    @programa_epe_solicitado = ProgramaEpeSolicitado.new
  end

  # GET /programa_epe_solicitados/1/edit
  def edit
  end

  # POST /programa_epe_solicitados
  # POST /programa_epe_solicitados.json
  def create
    @programa_epe_solicitado = ProgramaEpeSolicitado.new(programa_epe_solicitado_params)

    respond_to do |format|
      if @programa_epe_solicitado.save
        format.html { redirect_to @programa_epe_solicitado, notice: 'Programa epe solicitado was successfully created.' }
        format.json { render :show, status: :created, location: @programa_epe_solicitado }
      else
        format.html { render :new }
        format.json { render json: @programa_epe_solicitado.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /programa_epe_solicitados/1
  # PATCH/PUT /programa_epe_solicitados/1.json
  def update
    respond_to do |format|
      if @programa_epe_solicitado.update(programa_epe_solicitado_params)
        format.html { redirect_to @programa_epe_solicitado, notice: 'Programa epe solicitado was successfully updated.' }
        format.json { render :show, status: :ok, location: @programa_epe_solicitado }
      else
        format.html { render :edit }
        format.json { render json: @programa_epe_solicitado.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /programa_epe_solicitados/1
  # DELETE /programa_epe_solicitados/1.json
  def destroy
    @programa_epe_solicitado.destroy
    respond_to do |format|
      format.html { redirect_to programa_epe_solicitados_url, notice: 'Programa epe solicitado was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_programa_epe_solicitado
      @programa_epe_solicitado = ProgramaEpeSolicitado.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def programa_epe_solicitado_params
      params.require(:programa_epe_solicitado).permit(:nombre)
    end
end
