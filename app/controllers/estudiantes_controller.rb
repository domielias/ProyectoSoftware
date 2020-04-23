class EstudiantesController < ApplicationController
  load_and_authorize_resource
  before_action :set_estudiante, only: [:show, :edit, :update, :destroy, :mostrar_horario_actual]

  # GET /estudiantes
  # GET /estudiantes.json
  def index
    @estudiantes = Estudiante.all
  end

  # GET /estudiantes/1
  # GET /estudiantes/1.json
  def show
  end

  def mostrar_horario_actual
  end

  def listar_clases
    @estudiante = Estudiante.find(params[:id])
  end

  def ficha_de_solicitud_estudiante
    @estudiante = Estudiante.new
    @estudiante.build_carrera_solicitada
    @estudiante.build_persona
    @estudiante.build_programa_internacional
    @estudiante.build_padre
    @estudiante.build_madre
    @estudiante.direccions.build
    @estudiante.build_examen_de_nivel
    @estudiante.build_informacion_academica
    @estudiante.build_progreso_inscripcion
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


    if @estudiante.save
      if guardado?
        redirect_to no_admitidos_url
      else finalizado?
        redirect_to estudiantes_url
      end
    else
      format.html { render :new }
    end
    # respond_to do |format|
    #   if @estudiante.save
    #     format.html { redirect_to @estudiante, notice: 'Estudiante was successfully created.' }
    #     format.json { render :show, status: :created, location: @estudiante }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @estudiante.errors, status: :unprocessable_entity }
    #   end
    # end

  end

  # PATCH/PUT /estudiantes/1
  # PATCH/PUT /estudiantes/1.json
  def update

    @estudiante.created_at = Time.zone.now if finalizado?
    @estudiante.admitido = true if finalizado?
    @estudiante.admitido = false if guardado?

    if @estudiante.update(estudiante_params)
      if guardado?
        redirect_to no_admitidos_url
      elsif finalizado? and estudiante_params['egresado'] == '0'
        redirect_to estudiantes_url
      elsif finalizado? and estudiante_params['egresado'] == '1'
        redirect_to egresados_url
      end
    else
      format.html { render :new }
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
      params.require(:estudiante).permit(:pasaporte, :tiempo_residencia, :numero_residencia, :matricula, :estado_civil, :nombre_conyugue, :nombre_conyugue, :sexo, :egresado, :admitido, :programa_epe_solicitado_id, :bloque_id,:programa_internacional_id, :carrera_solicitada_id, :institucion_id, direccions_attributes: [:id, :telefono, :direccion_completa, :ciudad, :codigo_postal, :pais_residencia, :pai_id], persona_attributes: [:id, :nombres, :apellidos, :fecha_nacimiento, :correo_electronico, :id_campus, :matricula], padre_attributes: [:id, :nombres, :apellidos], madre_attributes: [:id, :nombres, :apellidos], examen_de_nivel_attributes: [:id, :promedio, :nivel_id, :fecha_examen],informacion_academica_attributes: [:id, :cantidad_de_anos_de_espanol_estudiadas, :asignaturas_de_espanol_recientes, :cantidad_de_horas_de_espanol_cursadas, :nivel_alcanzado],progreso_inscripcion_attributes: [:id, :formulario_admisiones, :formulario_especial_para_extranjeros, :visa_estudiante, :acta_nacimiento, :certificacion_medica, :fotografias, :copia_pasaporte, :record_secundaria, :certificado_pruebas_nacionales, :recibo_admision, :seguro_medico_o_viajero, :acta_nacimiento_padres, :record_notas_original_de_univ_de_procedencia])
    end

    def guardado?
      params[:commit] == "Guardar como borrador"
    end

    def finalizado?
      params[:commit] == "Finalizar"
    end

end
