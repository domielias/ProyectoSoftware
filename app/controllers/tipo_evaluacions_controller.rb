class TipoEvaluacionsController < ApplicationController
  before_action :set_tipo_evaluacion, only: [:show, :edit, :update, :destroy]

  # GET /tipo_evaluacions
  # GET /tipo_evaluacions.json
  def index
    @tipo_evaluacions = TipoEvaluacion.all
  end

  # GET /tipo_evaluacions/1
  # GET /tipo_evaluacions/1.json
  def show
  end

  # GET /tipo_evaluacions/new
  def new
    @tipo_evaluacion = TipoEvaluacion.new
  end

  # GET /tipo_evaluacions/1/edit
  def edit
  end

  # POST /tipo_evaluacions
  # POST /tipo_evaluacions.json
  def create
    @tipo_evaluacion = TipoEvaluacion.new(tipo_evaluacion_params)

    respond_to do |format|
      if @tipo_evaluacion.save
        format.html { redirect_to @tipo_evaluacion, notice: 'Tipo evaluacion was successfully created.' }
        format.json { render :show, status: :created, location: @tipo_evaluacion }
      else
        format.html { render :new }
        format.json { render json: @tipo_evaluacion.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tipo_evaluacions/1
  # PATCH/PUT /tipo_evaluacions/1.json
  def update
    respond_to do |format|
      if @tipo_evaluacion.update(tipo_evaluacion_params)
        format.html { redirect_to @tipo_evaluacion, notice: 'Tipo evaluacion was successfully updated.' }
        format.json { render :show, status: :ok, location: @tipo_evaluacion }
      else
        format.html { render :edit }
        format.json { render json: @tipo_evaluacion.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tipo_evaluacions/1
  # DELETE /tipo_evaluacions/1.json
  def destroy
    @tipo_evaluacion.destroy
    respond_to do |format|
      format.html { redirect_to tipo_evaluacions_url, notice: 'Tipo evaluacion was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tipo_evaluacion
      @tipo_evaluacion = TipoEvaluacion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tipo_evaluacion_params
      params.require(:tipo_evaluacion).permit(:nombre)
    end
end
