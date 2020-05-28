class BloqueAsignaturasController < ApplicationController
  load_and_authorize_resource
  before_action :set_bloque_asignatura, only: [:show, :edit, :update, :destroy]

  # GET /bloque_asignaturas
  # GET /bloque_asignaturas.json
  def index
    @bloque_asignaturas = BloqueAsignatura.all
  end

  # GET /bloque_asignaturas/1
  # GET /bloque_asignaturas/1.json
  def show
  end

  # GET /bloque_asignaturas/new
  def new
    @bloque_asignatura = BloqueAsignatura.new
  end

  # GET /bloque_asignaturas/1/edit
  def edit
  end

  # POST /bloque_asignaturas
  # POST /bloque_asignaturas.json
  def create
    @bloque_asignatura = BloqueAsignatura.new(bloque_asignatura_params)

    respond_to do |format|
      if @bloque_asignatura.save
        format.html { redirect_to @bloque_asignatura, notice: 'Bloque asignatura was successfully created.' }
        format.json { render :show, status: :created, location: @bloque_asignatura }
      else
        format.html { render :new }
        format.json { render json: @bloque_asignatura.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bloque_asignaturas/1
  # PATCH/PUT /bloque_asignaturas/1.json
  def update
    respond_to do |format|
      if @bloque_asignatura.update(bloque_asignatura_params)
        format.html { redirect_to @bloque_asignatura, notice: 'Bloque asignatura was successfully updated.' }
        format.json { render :show, status: :ok, location: @bloque_asignatura }
      else
        format.html { render :edit }
        format.json { render json: @bloque_asignatura.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bloque_asignaturas/1
  # DELETE /bloque_asignaturas/1.json
  def destroy
    @bloque_asignatura.destroy
    respond_to do |format|
      format.html { redirect_to bloque_asignaturas_url, notice: 'Bloque asignatura was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bloque_asignatura
      @bloque_asignatura = BloqueAsignatura.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bloque_asignatura_params
      params.require(:bloque_asignatura).permit(:bloque_id, :asignatura_id)
    end
end
