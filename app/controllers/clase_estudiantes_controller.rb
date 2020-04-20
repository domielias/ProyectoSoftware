class ClaseEstudiantesController < ApplicationController
  load_and_authorize_resource
  before_action :set_clase_estudiante, only: [:show, :edit, :update, :destroy]

  # GET /clase_estudiantes
  # GET /clase_estudiantes.json
  def index
    @clase_estudiantes = ClaseEstudiante.all
  end

  # GET /clase_estudiantes/1
  # GET /clase_estudiantes/1.json
  def show
  end

  # GET /clase_estudiantes/new
  def new
    @clase_estudiante = ClaseEstudiante.new
  end

  # GET /clase_estudiantes/1/edit
  def edit
  end

  # POST /clase_estudiantes
  # POST /clase_estudiantes.json
  def create
    @clase_estudiante = ClaseEstudiante.new(clase_estudiante_params)

    respond_to do |format|
      if @clase_estudiante.save
        format.html { redirect_to @clase_estudiante, notice: 'Clase estudiante was successfully created.' }
        format.json { render :show, status: :created, location: @clase_estudiante }
      else
        format.html { render :new }
        format.json { render json: @clase_estudiante.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clase_estudiantes/1
  # PATCH/PUT /clase_estudiantes/1.json
  def update
    respond_to do |format|
      if @clase_estudiante.update(clase_estudiante_params)
        format.html { redirect_to @clase_estudiante, notice: 'Clase estudiante was successfully updated.' }
        format.json { render :show, status: :ok, location: @clase_estudiante }
      else
        format.html { render :edit }
        format.json { render json: @clase_estudiante.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clase_estudiantes/1
  # DELETE /clase_estudiantes/1.json
  def destroy
    @clase_estudiante.destroy
    respond_to do |format|
      format.html { redirect_to clase_estudiantes_url, notice: 'Clase estudiante was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clase_estudiante
      @clase_estudiante = ClaseEstudiante.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def clase_estudiante_params
      params.require(:clase_estudiante).permit(:clase_id, :estudiante_id)
    end
end
