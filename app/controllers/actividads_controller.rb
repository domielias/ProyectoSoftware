class ActividadsController < ApplicationController
  load_and_authorize_resource
  before_action :set_actividad, only: [:show, :edit, :update, :destroy]

  # GET /actividads
  # GET /actividads.json
  def index
    @actividad = Actividad.accessible_by(current_ability)
  end

  # GET /actividads/1
  # GET /actividads/1.json
  def show
  end

  # GET /actividads/new
  def new
    @actividad = Actividad.new
    @actividad.user_id= current_user
  end

  # GET /actividads/1/edit
  def edit
  end

  # POST /actividads
  # POST /actividads.json
  def create
    @actividad = Actividad.new(actividad_params)
    
    params[:clases][:id].each do |clase|
      if !clase.empty?
        @actividad.clase_actividads.build(clase_id: clase)
      end
    end

    respond_to do |format|
      if @actividad.save
        format.html { redirect_to @actividad, notice: 'Actividad was successfully created.' }
        format.json { render :show, status: :created, location: @actividad }
      else
        format.html { render :new }
        format.json { render json: @actividad.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /actividads/1
  # PATCH/PUT /actividads/1.json
  def update

    ClaseActividad.where(actividad_id: @actividad).where.not(clase_id: params[:clases][:id].reject { |e| e.empty? }).delete_all
    params[:clases][:id].each do |clase|
      if !clase.empty?
        if !ClaseActividad.exists?(actividad_id: @actividad, clase_id: clase)
        @actividad.clase_actividads.build(clase_id: clase)
        end
      end
    end

    respond_to do |format|
      if @actividad.update(actividad_params)
        format.html { redirect_to @actividad, notice: 'Actividad was successfully updated.' }
        format.json { render :show, status: :ok, location: @actividad }
      else
        format.html { render :edit }
        format.json { render json: @actividad.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /actividads/1
  # DELETE /actividads/1.json
  def destroy
    @actividad.destroy
    respond_to do |format|
      format.html { redirect_to actividads_url, notice: 'Actividad was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_actividad
      @actividad = Actividad.find(params[:id])
    end


    # Only allow a list of trusted parameters through.
    def actividad_params
      params.require(:actividad).permit(:fecha, :hora_inicio, :hora_fin, :user_id,:descripcion, :ubicacion, :forma_de_transporte, :dentro_de_la_ciudad)
    end
end
