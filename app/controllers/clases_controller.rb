class ClasesController < ApplicationController
  before_action :set_clase, only: [:show, :edit, :update, :destroy]
  # GET /clases
  # GET /clases.json
  def index
    @clases = Clase.all
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

    params[:estudiantes][:id].each do |estudiante|
      if !estudiante.empty?
        @clase.clase_estudiantes.build(estudiante_id: estudiante)
      end
    end

    respond_to do |format|
      if @clase.save
        format.html { redirect_to @clase, notice: 'Clase was successfully created.' }
        format.json { render :show, status: :created, location: @clase }
      else
        format.html { render :new }
        format.json { render json: @clase.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clases/1
  # PATCH/PUT /clases/1.json
  def update

    ClaseEstudiante.where(clase_id: @clase).where.not(estudiante_id: params[:estudiantes][:id].reject { |e| e.empty? }).delete_all

    params[:estudiantes][:id].each do |estudiante|
      if !estudiante.empty?
        if !ClaseEstudiante.exists?(clase_id: @clase, estudiante_id: estudiante)
        @clase.clase_estudiantes.build(estudiante_id: estudiante)
        end
      end
    end

    respond_to do |format|
      if @clase.update(clase_params)
        format.html { redirect_to @clase, notice: 'Clase was successfully updated.' }
        format.json { render :show, status: :ok, location: @clase }
      else
        format.html { render :edit }
        format.json { render json: @clase.errors, status: :unprocessable_entity }
      end
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
    params.require(:clase).permit(:fecha_inicio, :fecha_final, :seccion, :activo, :no_clase, :lugar, :modalidad, :correquisito, :ciclo_id, :profesor_id, :asignatura_id, :nivel_id, estudiante_ids: [], horarios_attributes: [:id, :dias, :start, :end, :_destroy])
  end
end
