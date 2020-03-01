class EstudiantesController < ApplicationController
  before_action :set_estudiante, only: [:show, :edit, :update, :destroy]

  # GET /estudiantes
  # GET /estudiantes.json
  def index
    @estudiantes = Estudiante.all
  end

  # GET /estudiantes/1
  # GET /estudiantes/1.json
  def show
  end

  # GET /estudiantes/new
  def new
    @estudiante = Estudiante.new
    #@estudiante.build_facultad
    #@estudiante.build_carrera_solicitada
    @estudiante.build_persona
      #@estudiante.build_programa_internacional
  end

  # GET /estudiantes/1/edit
  def edit
  end

  # POST /estudiantes
  # POST /estudiantes.json
  def create
    @estudiante = Estudiante.new(estudiante_params)

    respond_to do |format|
      if @estudiante.save
        format.html { redirect_to @estudiante, notice: 'Estudiante was successfully created.' }
        format.json { render :show, status: :created, location: @estudiante }
      else
        format.html { render :new }
        format.json { render json: @estudiante.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estudiantes/1
  # PATCH/PUT /estudiantes/1.json
  def update
    respond_to do |format|
      if @estudiante.update(estudiante_params)
        format.html { redirect_to @estudiante, notice: 'Estudiante was successfully updated.' }
        format.json { render :show, status: :ok, location: @estudiante }
      else
        format.html { render :edit }
        format.json { render json: @estudiante.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estudiantes/1
  # DELETE /estudiantes/1.json
  def destroy
    @estudiante.destroy
    respond_to do |format|
      format.html { redirect_to estudiantes_url, notice: 'Estudiante was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estudiante
      @estudiante = Estudiante.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def estudiante_params
      # params.require(:estudiante).permit(:pasaporte, :tiempo_residencia, :numero_residencia, :id_campus, :matricula, :estado_civil, :nombre_conyugue, :nombre_conyugue, :sexo, :egresado, persons_attributes: [:nombres, :apellidos, :fecha_nacimiento, :correo_electronico], facultads_attributes: [:id, :nombre], programa_internacional: [:id, :nombre], carrera_solicitada: [:id, :nombre], padre: [:id, :nombres, :apellidos], madre: [:id, :nombres, :apellidos], direccion: [:id, :telefono, :calle, :ciudad, :codigo_postal, pai: [:id, :nacionalidad]], examen_de_nivel: [:id, :promedio], informacion_academica: [:id, :cantidad_de_anos_de_espanol_estudiadas, :asignaturas_de_espanol_recientes, :cantidad_de_horas_de_espanol_cursadas, :nivel_alcanzado], progreso_inscripcions: [:id, :formulario_solicitud, :acta_nacimiento, :certificacion_medica, :fotografias, :copia_cedula, :record_secundaria, :certificado_pruebas_nacionales, :recibo_admision, :copia_seguro_salud, :acta_nacimiento_padre, :record_notas_original_de_univ_de_procedencia, :copia_vacunacion], bloque: [:id, :nombre], clase: [:id, :nombre])
      params.require(:estudiante).permit(:pasaporte, :tiempo_residencia, :numero_residencia, :id_campus, :matricula, :estado_civil, :nombre_conyugue, :nombre_conyugue, :sexo, :egresado, persona_attributes: [:id, :nombres, :apellidos, :fecha_nacimiento, :correo_electronico])
    end
end
