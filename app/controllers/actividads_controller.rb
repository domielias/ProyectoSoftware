class ActividadsController < ApplicationController
  load_and_authorize_resource
  before_action :set_actividad, only: [:show, :edit, :update, :destroy]

  # GET /actividads
  # GET /actividads.json
  def index
    # Eso no deberia ser @actividads????
    @actividad = Actividad.accessible_by(current_ability)
  end

  # GET /actividads/1
  # GET /actividads/1.json
  def show
  end

  # GET /actividads/new
  def new
    @actividad = Actividad.new
    @clase_actividads = @actividad.clase_actividads.build
  end

  # GET /actividads/1/edit
  def edit
  end

  # POST /actividads
  # POST /actividads.json
  def create
    @actividad = Actividad.new(actividad_params)

    # params[:clases][:id].each do |clase|
    #   if !clase.empty?
    #     @actividad.clase_actividads.build(clase_id: clase)
    #   end
    # end

    @otras_actividades = Actividad.all
    # Time.at(@otras_actividades[0].fecha).to_date === Time.at(@actividad.fecha).to_date

    # Actividad.joins(:clases).where(clases: {profesor_id: 2})
    # Actividad.joins(:clases).where(clases: {profesor_id: [1,2]})
    # Actividad.joins(:clases).where(clases: {id: [1,2]})


    @valid = true

    # Todas actividades de los profesores de las clases seleccionadas
    # Actividad.joins(:clases).where(clases: {profesor_id: Clase.where(profesor_id: params[:actividad][:clase_ids]).ids}).each
    Actividad.all.each do |otra_actividad|
      # Si las fechas son las mismas
      if Time.at(otra_actividad.fecha).to_date === Time.at(@actividad.fecha).to_date
        if ((@actividad.hora_inicio.strftime("%H:%M") < otra_actividad.hora_fin.strftime("%H:%M") && @actividad.hora_inicio.strftime("%H:%M") >= otra_actividad.hora_inicio.strftime("%H:%M")) && @actividad.hora_fin.strftime("%H:%M") > otra_actividad.hora_fin.strftime("%H:%M")) || (@actividad.hora_inicio.strftime("%H:%M") < otra_actividad.hora_inicio.strftime("%H:%M") && (@actividad.hora_fin.strftime("%H:%M") <= otra_actividad.hora_fin.strftime("%H:%M") && @actividad.hora_fin.strftime("%H:%M") > otra_actividad.hora_inicio.strftime("%H:%M"))) || ((@actividad.hora_inicio.strftime("%H:%M") > otra_actividad.hora_inicio.strftime("%H:%M") && @actividad.hora_inicio.strftime("%H:%M") < otra_actividad.hora_fin.strftime("%H:%M")) && (@actividad.hora_fin.strftime("%H:%M") > otra_actividad.hora_inicio.strftime("%H:%M") && @actividad.hora_fin.strftime("%H:%M") < otra_actividad.hora_fin.strftime("%H:%M"))) || (@actividad.hora_inicio.strftime("%H:%M") <= otra_actividad.hora_inicio.strftime("%H:%M") && @actividad.hora_fin.strftime("%H:%M") >= otra_actividad.hora_fin.strftime("%H:%M"))
          @valid = false
          break
        end
      end
    end

    # byebug

    if @valid
      if @actividad.save
        redirect_to actividads_url
      else
        format.html { render :new }
      end
    end

  end

  # PATCH/PUT /actividads/1
  # PATCH/PUT /actividads/1.json
  def update

    # n_actividad = Acti

    @valid = true

    # Todas actividades de los profesores de las clases seleccionadas
    # Actividad.joins(:clases).where(clases: {profesor_id: Clase.where(profesor_id: params[:actividad][:clase_ids]).ids}).each
    Actividad.where.not(id: @actividad.id).each do |otra_actividad|
      # Si las fechas son las mismas
      if Time.at(otra_actividad.fecha).to_date === Time.at(@actividad.fecha).to_date
        if ((@actividad.hora_inicio.strftime("%H:%M") < otra_actividad.hora_fin.strftime("%H:%M") && @actividad.hora_inicio.strftime("%H:%M") >= otra_actividad.hora_inicio.strftime("%H:%M")) && @actividad.hora_fin.strftime("%H:%M") > otra_actividad.hora_fin.strftime("%H:%M")) || (@actividad.hora_inicio.strftime("%H:%M") < otra_actividad.hora_inicio.strftime("%H:%M") && (@actividad.hora_fin.strftime("%H:%M") <= otra_actividad.hora_fin.strftime("%H:%M") && @actividad.hora_fin.strftime("%H:%M") > otra_actividad.hora_inicio.strftime("%H:%M"))) || ((@actividad.hora_inicio.strftime("%H:%M") > otra_actividad.hora_inicio.strftime("%H:%M") && @actividad.hora_inicio.strftime("%H:%M") < otra_actividad.hora_fin.strftime("%H:%M")) && (@actividad.hora_fin.strftime("%H:%M") > otra_actividad.hora_inicio.strftime("%H:%M") && @actividad.hora_fin.strftime("%H:%M") < otra_actividad.hora_fin.strftime("%H:%M"))) || (@actividad.hora_inicio.strftime("%H:%M") <= otra_actividad.hora_inicio.strftime("%H:%M") && @actividad.hora_fin.strftime("%H:%M") >= otra_actividad.hora_fin.strftime("%H:%M"))
          @valid = false
          break
        end
      end
    end

    byebug

    # if @valid
    #   if @actividad.update(actividad_params)
    #     redirect_to actividads_url
    #   else
    #     format.html { render :new }
    #   end
    # end

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
      params.require(:actividad).permit(:fecha, :del_departamento, :hora_inicio, :hora_fin, :user_id,:nombre_de_la_actividad,:objetivo, :ubicacion, :forma_de_transporte, :dentro_de_la_ciudad, clase_ids: [])
    end
end
