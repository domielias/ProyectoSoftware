class InformacionAcademicasController < ApplicationController
  load_and_authorize_resource
  before_action :set_informacion_academica, only: [:show, :edit, :update, :destroy]

  # GET /informacion_academicas
  # GET /informacion_academicas.json
  def index
    @informacion_academicas = InformacionAcademica.all
  end

  # GET /informacion_academicas/1
  # GET /informacion_academicas/1.json
  def show
  end

  # GET /informacion_academicas/new
  def new
    @informacion_academica = InformacionAcademica.new
  end

  # GET /informacion_academicas/1/edit
  def edit
  end

  # POST /informacion_academicas
  # POST /informacion_academicas.json
  def create
    @informacion_academica = InformacionAcademica.new(informacion_academica_params)

    respond_to do |format|
      if @informacion_academica.save
        format.html { redirect_to @informacion_academica, notice: 'Informacion academica was successfully created.' }
        format.json { render :show, status: :created, location: @informacion_academica }
      else
        format.html { render :new }
        format.json { render json: @informacion_academica.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /informacion_academicas/1
  # PATCH/PUT /informacion_academicas/1.json
  def update
    respond_to do |format|
      if @informacion_academica.update(informacion_academica_params)
        format.html { redirect_to @informacion_academica, notice: 'Informacion academica was successfully updated.' }
        format.json { render :show, status: :ok, location: @informacion_academica }
      else
        format.html { render :edit }
        format.json { render json: @informacion_academica.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /informacion_academicas/1
  # DELETE /informacion_academicas/1.json
  def destroy
    @informacion_academica.destroy
    respond_to do |format|
      format.html { redirect_to informacion_academicas_url, notice: 'Informacion academica was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_informacion_academica
      @informacion_academica = InformacionAcademica.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def informacion_academica_params
      params.require(:informacion_academica).permit(:cantidad_de_anos_de_espanol_estudiadas, :asignaturas_de_espanol_recientes, :cantidad_de_horas_de_espanol_cursadas, :nivel_alcanzado)
    end
end
