class BloquesController < ApplicationController
  load_and_authorize_resource
  before_action :set_bloque, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: %i[index]
  skip_authorize_resource :only => [:index]

  # GET /bloques
  # GET /bloques.json
  def index
    # Este if es para que si no se especifica la condicion de seleccion_estudiante en la url, será
    # falsa por defecto, como lo estuvo antes de modificar ese pedazo de código
    if params[:seleccion_estudiante] == nil
      params[:seleccion_estudiante] = false
    end
    # Este params[:seleccion_estudiante] if es para que pueda usar la condicion de seleccion_estudiante en la llamada de ajax
    # url: '/bloques.json?seleccion_estudiante=true'
    @bloques = Bloque.where(seleccion_estudiante: params[:seleccion_estudiante])
  end
  def index_bloque_estudiante
    @bloques = Bloque.where(seleccion_estudiante: true)
  end
  # GET /bloques/1
  # GET /bloques/1.json
  def show
    @mis_clases = @bloque.clases
    @mis_clases = @mis_clases.where(clase: params[:clase]) if params[:clase]

    # @mis_estuds = @mis_clases.where(estudiantes: params[:estudiantes][:id])

  end

  def seleccion_para_estudiante
    @bloque= Bloque.new
  end

  # GET /bloques/new
  def new
    @bloque = Bloque.new
    @bloque.clases.build

    @bloque_asignatura = @bloque.bloque_asignaturas.build
    @bloque_estudiante = @bloque.bloque_estudiantes.build

  end

  # GET /bloques/1/edit
  def edit
    @asignaturas_seleccionadas = @bloque.asignaturas
    @estudiantes_seleccionadas = @bloque.estudiantes
  end

  # POST /bloques
  # POST /bloques.json
  def create

    @bloque = Bloque.new(bloque_params)
    
    @bloque.clases.each do |clase|
      clase.ciclo_id = @bloque.ciclo_id
    end

    @bloque.seleccion_estudiante = true if guardado?
    @bloque.seleccion_estudiante = false if finalizar?

    if @bloque.seleccion_estudiante==true
      if @bloque.save
        redirect_to index_bloque_estudiante_path
      else
        format.html { render :new }
      end
    elsif @bloque.seleccion_estudiante==false
      if @bloque.save
        redirect_to bloques_path
      else
        format.html { render :new }
      end    
    end
    # if @bloque.save
    #   redirect_to bloques_url
    # else
    #   format.html { render :new }
    # end


  end

  # PATCH/PUT /bloques/1
  # PATCH/PUT /bloques/1.json
  def update

    # BloqueAsignatura.where(bloque_id: @bloque).where.not(asignatura_id: params[:asignaturas][:id].reject { |a| a.empty? }).delete_all
    #
    # params[:asignaturas][:id].each do |asignatura|
    #   if !asignatura.empty?
    #     if !BloqueAsignatura.exists?(bloque_id: @bloque, asignatura_id: asignatura)
    #     @bloque.bloque_asignaturas.build(asignatura_id: asignatura)
    #     end
    #   end
    # end
    #
    # BloqueEstudiante.where(bloque_id: @bloque).where.not(estudiante_id: params[:estudiantes][:id].reject { |e| e.empty? }).delete_all
    #
    # params[:estudiantes][:id].each do |estudiante|
    #   if !estudiante.empty?
    #     if !BloqueEstudiante.exists?(bloque_id: @bloque, estudiante_id: estudiante)
    #     @bloque.bloque_estudiantes.build(estudiante_id: estudiante)
    #     end
    #   end
    # end

    if @bloque.update(bloque_params)
      redirect_to bloques_url
    else
      format.html { render :new }
    end

  end

  # DELETE /bloques/1
  # DELETE /bloques/1.json
  def destroy
    if @bloque.seleccion_estudiante = true
      if @bloque.destroy
        redirect_to index_bloque_estudiante_path
      else
        format.html { render :new }
      end
    elsif @bloque.seleccion_estudiante = false
      if @bloque.destroy
        redirect_to bloques_path
      else
        format.html { render :new }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bloque
      @bloque = Bloque.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def bloque_params
      params.require(:bloque).permit(:fecha_inicio, :admitido,:fecha_final, :creador, :evaluacion_bloque_num, :evaluacion_bloque_str, :programa_epe_solicitado_id, :nivel_id, :ciclo_id, :persona_id, clases_attributes: [:id, :seccion, :no_clase, :lugar, :modalidad, :correquisito, :evaluacion_parcial_num, :evaluacion_parcial_str, :_destroy, :asignatura_id, :ciclo_id, :profesor_id, estudiante_ids: [], horarios_attributes: [:id, :dias, :start, :end, :_destroy]])
    end
    def guardado?
      params[:commit] == "Guardar bloque"
    end
    def finalizar?
      params[:commit] == "Finalizar"
    end
end
