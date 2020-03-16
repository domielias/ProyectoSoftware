class ClaseActividadsController < ApplicationController
  before_action :set_clase_actividad, only: [:show, :edit, :update, :destroy]

  # GET /clase_actividads
  # GET /clase_actividads.json
  def index
    @clase_actividads = ClaseActividad.all
  end

  # GET /clase_actividads/1
  # GET /clase_actividads/1.json
  def show
  end

  # GET /clase_actividads/new
  def new
    @clase_actividad = ClaseActividad.new
  end

  # GET /clase_actividads/1/edit
  def edit
  end

  # POST /clase_actividads
  # POST /clase_actividads.json
  def create
    @clase_actividad = ClaseActividad.new(clase_actividad_params)

    respond_to do |format|
      if @clase_actividad.save
        format.html { redirect_to @clase_actividad, notice: 'Clase actividad was successfully created.' }
        format.json { render :show, status: :created, location: @clase_actividad }
      else
        format.html { render :new }
        format.json { render json: @clase_actividad.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clase_actividads/1
  # PATCH/PUT /clase_actividads/1.json
  def update
    respond_to do |format|
      if @clase_actividad.update(clase_actividad_params)
        format.html { redirect_to @clase_actividad, notice: 'Clase actividad was successfully updated.' }
        format.json { render :show, status: :ok, location: @clase_actividad }
      else
        format.html { render :edit }
        format.json { render json: @clase_actividad.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clase_actividads/1
  # DELETE /clase_actividads/1.json
  def destroy
    @clase_actividad.destroy
    respond_to do |format|
      format.html { redirect_to clase_actividads_url, notice: 'Clase actividad was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clase_actividad
      @clase_actividad = ClaseActividad.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def clase_actividad_params
      params.require(:clase_actividad).permit(:clase_id, :actividad_id)
    end
end
