class EvaluacionsController < ApplicationController
  load_and_authorize_resource
  before_action :set_evaluacion, only: [:show, :edit, :update, :destroy]

  # GET /evaluacions
  # GET /evaluacions.json
  def index
    @evaluacions = Evaluacion.all
  end

  # GET /evaluacions/1
  # GET /evaluacions/1.json
  def show
  end

  # GET /evaluacions/new
  def new
    @evaluacion = Evaluacion.new
  end

  # GET /evaluacions/1/edit
  def edit
  end

  # POST /evaluacions
  # POST /evaluacions.json
  def create
    @evaluacion = Evaluacion.new(evaluacion_params)

    respond_to do |format|
      if @evaluacion.save
        format.html { redirect_to @evaluacion, notice: 'Evaluacion was successfully created.' }
        format.json { render :show, status: :created, location: @evaluacion }
      else
        format.html { render :new }
        format.json { render json: @evaluacion.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /evaluacions/1
  # PATCH/PUT /evaluacions/1.json
  def update
    respond_to do |format|
      if @evaluacion.update(evaluacion_params)
        format.html { redirect_to @evaluacion, notice: 'Evaluacion was successfully updated.' }
        format.json { render :show, status: :ok, location: @evaluacion }
      else
        format.html { render :edit }
        format.json { render json: @evaluacion.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /evaluacions/1
  # DELETE /evaluacions/1.json
  def destroy
    @evaluacion.destroy
    respond_to do |format|
      format.html { redirect_to evaluacions_url, notice: 'Evaluacion was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evaluacion
      @evaluacion = Evaluacion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def evaluacion_params
      params.require(:evaluacion).permit(:promedio)
    end
end
