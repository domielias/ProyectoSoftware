class CarreraSolicitadasController < ApplicationController
  load_and_authorize_resource
  before_action :set_carrera_solicitada, only: [:show, :edit, :update, :destroy]

  # GET /carrera_solicitadas
  # GET /carrera_solicitadas.json
  def index
    @carrera_solicitadas = CarreraSolicitada.all
  end

  # GET /carrera_solicitadas/1
  # GET /carrera_solicitadas/1.json
  def show
  end

  # GET /carrera_solicitadas/new
  def new
    @carrera_solicitada = CarreraSolicitada.new
  end

  # GET /carrera_solicitadas/1/edit
  def edit
  end

  # POST /carrera_solicitadas
  # POST /carrera_solicitadas.json
  def create
    @carrera_solicitada = CarreraSolicitada.new(carrera_solicitada_params)

    respond_to do |format|
      if @carrera_solicitada.save
        flash[:success] = 'Carrera Solicitada creada'
        format.html { redirect_to @carrera_solicitada, notice: 'Carrera solicitada was successfully created.' }
        format.json { render :show, status: :created, location: @carrera_solicitada }
      else
        format.html { render :new }
        format.json { render json: @carrera_solicitada.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /carrera_solicitadas/1
  # PATCH/PUT /carrera_solicitadas/1.json
  def update
    respond_to do |format|
      if @carrera_solicitada.update(carrera_solicitada_params)
        format.html { redirect_to @carrera_solicitada, notice: 'Carrera solicitada was successfully updated.' }
        format.json { render :show, status: :ok, location: @carrera_solicitada }
      else
        format.html { render :edit }
        format.json { render json: @carrera_solicitada.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /carrera_solicitadas/1
  # DELETE /carrera_solicitadas/1.json
  def destroy
    @carrera_solicitada.destroy
    respond_to do |format|
      format.html { redirect_to carrera_solicitadas_url, notice: 'Carrera solicitada was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_carrera_solicitada
      @carrera_solicitada = CarreraSolicitada.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def carrera_solicitada_params
      params.require(:carrera_solicitada).permit(:nombre)
    end
end
