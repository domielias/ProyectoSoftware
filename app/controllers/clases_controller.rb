class ClasesController < ApplicationController
  # load_and_authorize_resource except: :show
  before_action :set_clase, only: [:show, :edit, :update, :destroy]
  # GET /clases
  # GET /clases.json
  def index
    @clases = Clase.accessible_by(current_ability)
  end

  # GET /clases/1
  # GET /clases/1.json
  def show
  end

  # GET /clases/new
  def new
    @clase = Clase.new
    @clase.build_ciclo
    @clase.build_profesor
    # @clase.build_asignatura
    @clase.horarios.build
    # @clase.build_correquisito
    @clase_estudiante = @clase.clase_estudiantes.build
  end

  # GET /clases/1/edit
  def edit

  end

  # POST /clases
  # POST /clases.json
  def create
    @clase = Clase.new(clase_params)

    if @clase.save
      redirect_to clases_url
    else
      format.html { render :new }
    end

  end

  # PATCH/PUT /clases/1
  # PATCH/PUT /clases/1.json
  def update

    if @clase.update(clase_params)
      redirect_to clases_url
    else
      format.html { render :new }
    end

  end

  # DELETE /clases/1
  # DELETE /clases/1.json
  def destroy
    @clase.destroy
    respond_to do |format|
      format.html { redirect_to clases_url, notice: 'Clase was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_clase
    @clase = Clase.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def clase_params
    params.require(:clase).permit(:seccion, :no_clase, :lugar, :modalidad, :correquisito, :evaluacion_parcial_num, :evaluacion_parcial_str, :asignatura_id, :profesor_id, estudiante_ids: [], horarios_attributes: [:id, :dias, :start, :end, :_destroy])
  end
end
