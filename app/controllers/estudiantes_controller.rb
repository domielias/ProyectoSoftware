class EstudiantesController < ApplicationController
  before_action :set_estudiante, only: [:show, :edit, :update, :destroy, :listar_clases]

  # GET /estudiantes
  # GET /estudiantes.json
  def index
    @estudiantes = Estudiante.all
  end

  # GET /estudiantes/1
  # GET /estudiantes/1.json
  def show
  end

  def listar_clases
  end

  # GET /estudiantes/new
  def new
    @estudiante = Estudiante.new
    @estudiante.build_carrera_solicitada
    @estudiante.build_persona
    @estudiante.build_programa_internacional
    @estudiante.build_padre
    @estudiante.build_madre
    2.times {@estudiante.direccions.build}
    @estudiante.build_examen_de_nivel
    @estudiante.build_informacion_academica
    @estudiante.build_progreso_inscripcion
  end

  # GET /estudiantes/1/edit
  def edit
  end

  # POST /estudiantes
  # POST /estudiantes.json
  def create
    @estudiante = Estudiante.new(estudiante_params)
    @estudiante.created_at = Time.zone.now if finalizado?
    @estudiante.admitido = true if finalizado?
    @estudiante.admitido = false if guardado?


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

    @estudiante.created_at = Time.zone.now if finalizado?
    @estudiante.admitido = true if finalizado?
    @estudiante.admitido = false if guardado?

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
      params.require(:estudiante).permit(:pasaporte, :tiempo_residencia, :numero_residencia, :matricula, :estado_civil, :nombre_conyugue, :nombre_conyugue, :sexo, :egresado, :admitido, :programa_epe_solicitado_id, :programa_internacional_id, :carrera_solicitada_id, :institucion_id, direccions_attributes: [:id, :telefono, :direccion_completa, :ciudad, :codigo_postal, :pais_residencia, :pai_id], persona_attributes: [:id, :nombres, :apellidos, :fecha_nacimiento, :correo_electronico, :id_campus, :matricula], padre_attributes: [:id, :nombres, :apellidos], madre_attributes: [:id, :nombres, :apellidos], examen_de_nivel_attributes: [:id, :promedio, :nivel_id, :fecha_examen],informacion_academica_attributes: [:id, :cantidad_de_anos_de_espanol_estudiadas, :asignaturas_de_espanol_recientes, :cantidad_de_horas_de_espanol_cursadas, :nivel_alcanzado],progreso_inscripcion_attributes: [:id, :formulario_admisiones, :formulario_especial_para_extranjeros, :visa_estudiante, :acta_nacimiento, :certificacion_medica, :fotografias, :copia_pasaporte, :record_secundaria, :certificado_pruebas_nacionales, :recibo_admision, :seguro_medico_o_viajero, :acta_nacimiento_padres, :record_notas_original_de_univ_de_procedencia, :copia_vacunacion])
    end

    def guardado?
      params[:commit] == "Guardar como borrador"
    end

    def finalizado?
      params[:commit] == "Finalizar"
    end

end
