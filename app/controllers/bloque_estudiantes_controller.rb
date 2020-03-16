class BloqueEstudiantesController < ApplicationController
  before_action :set_bloque_estudiante, only: [:show, :edit, :update, :destroy]

  # GET /bloque_estudiantes
  # GET /bloque_estudiantes.json
  def index
    @bloque_estudiantes = BloqueEstudiante.all
  end

  # GET /bloque_estudiantes/1
  # GET /bloque_estudiantes/1.json
  def show
  end

  # GET /bloque_estudiantes/new
  def new
    @bloque_estudiante = BloqueEstudiante.new
  end

  # GET /bloque_estudiantes/1/edit
  def edit
  end

  # POST /bloque_estudiantes
  # POST /bloque_estudiantes.json
  def create
    @bloque_estudiante = BloqueEstudiante.new(bloque_estudiante_params)

    respond_to do |format|
      if @bloque_estudiante.save
        format.html { redirect_to @bloque_estudiante, notice: 'Bloque estudiante was successfully created.' }
        format.json { render :show, status: :created, location: @bloque_estudiante }
      else
        format.html { render :new }
        format.json { render json: @bloque_estudiante.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bloque_estudiantes/1
  # PATCH/PUT /bloque_estudiantes/1.json
  def update
    respond_to do |format|
      if @bloque_estudiante.update(bloque_estudiante_params)
        format.html { redirect_to @bloque_estudiante, notice: 'Bloque estudiante was successfully updated.' }
        format.json { render :show, status: :ok, location: @bloque_estudiante }
      else
        format.html { render :edit }
        format.json { render json: @bloque_estudiante.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bloque_estudiantes/1
  # DELETE /bloque_estudiantes/1.json
  def destroy
    @bloque_estudiante.destroy
    respond_to do |format|
      format.html { redirect_to bloque_estudiantes_url, notice: 'Bloque estudiante was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bloque_estudiante
      @bloque_estudiante = BloqueEstudiante.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bloque_estudiante_params
      params.require(:bloque_estudiante).permit(:bloque_id, :estudiante_id)
    end
end
