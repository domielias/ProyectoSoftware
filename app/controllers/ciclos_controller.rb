class CiclosController < ApplicationController
  load_and_authorize_resource
  before_action :set_ciclo, only: [:show, :edit, :update, :destroy, :finalizar]

  # GET /ciclos
  # GET /ciclos.json
  def index
    @ciclos = Ciclo.all
  end

  # GET /ciclos/1
  # GET /ciclos/1.json
  def show
  end

  def finalizar
    @ciclo.update_attribute(:actual, false)
    @ciclos = Ciclo.all
    render "index"
  end
  def iniciarnombre
    puts @ciclo.nombre
  end
  # GET /ciclos/new
  def new
    @ciclo = Ciclo.new
  end

  # GET /ciclos/1/edit
  def edit
  end

  # POST /ciclos
  # POST /ciclos.json
  def create
    @ciclo = Ciclo.new(ciclo_params)

    if @ciclo.save
      redirect_to ciclos_url
    else
      format.html { render :new }
    end
  end

  # PATCH/PUT /ciclos/1
  # PATCH/PUT /ciclos/1.json
  def update
    if @ciclo.update(ciclo_params)
      redirect_to ciclos_url
    else
      format.html { render :new }
    end
  end

  # DELETE /ciclos/1
  # DELETE /ciclos/1.json
  def destroy
    @ciclo.destroy
    respond_to do |format|
      format.html { redirect_to ciclos_url, notice: 'Ciclo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ciclo
      @ciclo = Ciclo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ciclo_params
      params.require(:ciclo).permit(:codigo, :nombre, :actual, :fecha_inicio, :fecha_final)
    end
end
