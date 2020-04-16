class BloquesController < ApplicationController
  before_action :set_bloque, only: [:show, :edit, :update, :destroy]

  # GET /bloques
  # GET /bloques.json
  def index
    @bloques = Bloque.all
  end

  # GET /bloques/1
  # GET /bloques/1.json
  def show
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

    # params[:asignaturas][:id].each do |asignatura|
    #   if !asignatura.empty?
    #     @bloque.bloque_asignaturas.build(asignatura_id: asignatura)
    #   end
    # end
    #
    # params[:estudiantes][:id].each do |estudiante|
    #   if !estudiante.empty?
    #     @bloque.bloque_estudiantes.build(estudiante_id: estudiante)
    #   end
    # end

    respond_to do |format|
      if @bloque.save
        format.html { redirect_to @bloque, notice: 'Bloque was successfully created.' }
        format.json { render :show, status: :created, location: @bloque }
      else
        format.html { render :new }
        format.json { render json: @bloque.errors, status: :unprocessable_entity }
      end
    end
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

    respond_to do |format|
      if @bloque.update(bloque_params)
        format.html { redirect_to @bloque, notice: 'Bloque was successfully updated.' }
        format.json { render :show, status: :ok, location: @bloque }
      else
        format.html { render :edit }
        format.json { render json: @bloque.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bloques/1
  # DELETE /bloques/1.json
  def destroy
    @bloque.destroy
    respond_to do |format|
      format.html { redirect_to bloques_url, notice: 'Bloque was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bloque
      @bloque = Bloque.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bloque_params
      params.require(:bloque).permit(:fecha_inicio, :fecha_final, :creador, :nivel_id, :ciclo_id, :persona_id, :estudiante_id, clases_attributes: [:id, :seccion, :no_clase, :lugar, :modalidad, :_destroy, :asignatura_id, :correquisito_id, horarios_attributes: [:id, :dias, :start, :end, :_destroy]])
    end
end
