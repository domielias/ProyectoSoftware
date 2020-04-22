class AsignaturasController < ApplicationController
  load_and_authorize_resource
  before_action :set_asignatura, only: [:show, :edit, :update, :destroy]

  # GET /asignaturas
  # GET /asignaturas.json
  def index
    @asignaturas = Asignatura.all
  end

  # GET /asignaturas/1
  # GET /asignaturas/1.json
  def show
  end

  # GET /asignaturas/new
  def new
    @asignatura = Asignatura.new
    @asignatura.build_facultad
  end

  # GET /asignaturas/1/edit
  def edit
  end

  # POST /asignaturas
  # POST /asignaturas.json
  def create
    @asignatura = Asignatura.new(asignatura_params)

    # respond_to do |format|
      if @asignatura.save
        redirect_to configuracion_path
        # format.html { redirect_to @asignatura, notice: 'Asignatura was successfully created.' }
        # format.json { render :show, status: :created, location: @asignatura }
      else
        # format.html { render :new }
        # format.json { render json: @asignatura.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /asignaturas/1
  # PATCH/PUT /asignaturas/1.json
  def update
    respond_to do |format|
      if @asignatura.update(asignatura_params)
        format.html { redirect_to @asignatura, notice: 'Asignatura was successfully updated.' }
        format.json { render :show, status: :ok, location: @asignatura }
      else
        format.html { render :edit }
        format.json { render json: @asignatura.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /asignaturas/1
  # DELETE /asignaturas/1.json
  def destroy
    @asignatura.destroy
    respond_to do |format|
      format.html { redirect_to asignaturas_url, notice: 'Asignatura was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_asignatura
      @asignatura = Asignatura.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def asignatura_params
      params.require(:asignatura).permit(:nombre, :clave, :valor_teorico, :valor_practico, :valor_credito, :facultad_id)
    end
end
