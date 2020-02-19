class ExamenDeNivelsController < ApplicationController
  before_action :set_examen_de_nivel, only: [:show, :edit, :update, :destroy]

  # GET /examen_de_nivels
  # GET /examen_de_nivels.json
  def index
    @examen_de_nivels = ExamenDeNivel.all
  end

  # GET /examen_de_nivels/1
  # GET /examen_de_nivels/1.json
  def show
  end

  # GET /examen_de_nivels/new
  def new
    @examen_de_nivel = ExamenDeNivel.new
  end

  # GET /examen_de_nivels/1/edit
  def edit
  end

  # POST /examen_de_nivels
  # POST /examen_de_nivels.json
  def create
    @examen_de_nivel = ExamenDeNivel.new(examen_de_nivel_params)

    respond_to do |format|
      if @examen_de_nivel.save
        format.html { redirect_to @examen_de_nivel, notice: 'Examen de nivel was successfully created.' }
        format.json { render :show, status: :created, location: @examen_de_nivel }
      else
        format.html { render :new }
        format.json { render json: @examen_de_nivel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /examen_de_nivels/1
  # PATCH/PUT /examen_de_nivels/1.json
  def update
    respond_to do |format|
      if @examen_de_nivel.update(examen_de_nivel_params)
        format.html { redirect_to @examen_de_nivel, notice: 'Examen de nivel was successfully updated.' }
        format.json { render :show, status: :ok, location: @examen_de_nivel }
      else
        format.html { render :edit }
        format.json { render json: @examen_de_nivel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /examen_de_nivels/1
  # DELETE /examen_de_nivels/1.json
  def destroy
    @examen_de_nivel.destroy
    respond_to do |format|
      format.html { redirect_to examen_de_nivels_url, notice: 'Examen de nivel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_examen_de_nivel
      @examen_de_nivel = ExamenDeNivel.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def examen_de_nivel_params
      params.require(:examen_de_nivel).permit(:promedio)
    end
end
