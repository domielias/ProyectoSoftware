class ProgresoInscripcionsController < ApplicationController
  before_action :set_progreso_inscripcion, only: [:show, :edit, :update, :destroy]

  # GET /progreso_inscripcions
  # GET /progreso_inscripcions.json
  def index
    @progreso_inscripcions = ProgresoInscripcion.all
  end

  # GET /progreso_inscripcions/1
  # GET /progreso_inscripcions/1.json
  def show
  end

  # GET /progreso_inscripcions/new
  def new
    @progreso_inscripcion = ProgresoInscripcion.new
  end

  # GET /progreso_inscripcions/1/edit
  def edit
  end

  # POST /progreso_inscripcions
  # POST /progreso_inscripcions.json
  def create
    @progreso_inscripcion = ProgresoInscripcion.new(progreso_inscripcion_params)

    respond_to do |format|
      if @progreso_inscripcion.save
        format.html { redirect_to @progreso_inscripcion, notice: 'Progreso inscripcion was successfully created.' }
        format.json { render :show, status: :created, location: @progreso_inscripcion }
      else
        format.html { render :new }
        format.json { render json: @progreso_inscripcion.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /progreso_inscripcions/1
  # PATCH/PUT /progreso_inscripcions/1.json
  def update
    respond_to do |format|
      if @progreso_inscripcion.update(progreso_inscripcion_params)
        format.html { redirect_to @progreso_inscripcion, notice: 'Progreso inscripcion was successfully updated.' }
        format.json { render :show, status: :ok, location: @progreso_inscripcion }
      else
        format.html { render :edit }
        format.json { render json: @progreso_inscripcion.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /progreso_inscripcions/1
  # DELETE /progreso_inscripcions/1.json
  def destroy
    @progreso_inscripcion.destroy
    respond_to do |format|
      format.html { redirect_to progreso_inscripcions_url, notice: 'Progreso inscripcion was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_progreso_inscripcion
      @progreso_inscripcion = ProgresoInscripcion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def progreso_inscripcion_params
      params.require(:progreso_inscripcion).permit(:formulario_solicitud, :acta_nacimiento, :certificacion_medica, :fotografias, :copia_cedula, :record_secundaria, :certificado_pruebas_nacionales, :recibo_admision, :copia_seguro_salud, :acta_nacimiento_padre, :record_notas_original_de_univ_de_procedencia, :copia_vacunacion)
    end
end
