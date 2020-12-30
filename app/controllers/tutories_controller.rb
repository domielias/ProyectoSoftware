class TutoriesController < ApplicationController
  load_and_authorize_resource
  before_action :set_tutory, only: [:show, :edit, :update, :destroy]

  # GET /tutories
  # GET /tutories.json
  def index
    @tutories = Tutory.all
  end

  # GET /tutories/1
  # GET /tutories/1.json
  def show
  end

  # GET /tutories/new
  def new
    @tutory = Tutory.new
  end

  # GET /tutories/1/edit
  def edit
  end

  # POST /tutories
  # POST /tutories.json
  def create
    @tutory = Tutory.new(tutory_params)

    @valid = true

    # Horario.joins(:tutory).where(tutories: {user_id: 3})
    @tutory.horarios.each do |horario_tutoria|
      Horario.joins(:tutory).where(tutories: {user_id: @tutory.user_id}).each do |horario_otra_tutoria|
        if horario_tutoria.dias == horario_otra_tutoria.dias
          if ((horario_tutoria.start.strftime("%H:%M") < horario_otra_tutoria.end.strftime("%H:%M") && horario_tutoria.start.strftime("%H:%M") >= horario_otra_tutoria.start.strftime("%H:%M")) && horario_tutoria.end.strftime("%H:%M") > horario_otra_tutoria.end.strftime("%H:%M")) || (horario_tutoria.start.strftime("%H:%M") < horario_otra_tutoria.start.strftime("%H:%M") && (horario_tutoria.end.strftime("%H:%M") <= horario_otra_tutoria.end.strftime("%H:%M") && horario_tutoria.end.strftime("%H:%M") > horario_otra_tutoria.start.strftime("%H:%M"))) || ((horario_tutoria.start.strftime("%H:%M") > horario_otra_tutoria.start.strftime("%H:%M") && horario_tutoria.start.strftime("%H:%M") < horario_otra_tutoria.end.strftime("%H:%M")) && (horario_tutoria.end.strftime("%H:%M") > horario_otra_tutoria.start.strftime("%H:%M") && horario_tutoria.end.strftime("%H:%M") < horario_otra_tutoria.end.strftime("%H:%M"))) || (horario_tutoria.start.strftime("%H:%M") <= horario_otra_tutoria.start.strftime("%H:%M") && horario_tutoria.end.strftime("%H:%M") >= horario_otra_tutoria.end.strftime("%H:%M"))
            @valid = false
            break
          end
        end
      end
    end

    if @valid
      if @tutory.save
        redirect_to tutories_url
      else
        format.html { render :new }
      end
    end
      

  end

  # PATCH/PUT /tutories/1
  # PATCH/PUT /tutories/1.json
  def update

    # Esta variable es para obtener las modificaciones, el id es para que la tutoria modif tenga el id de la tutoria original
    @n_tutory = Tutory.new(tutory_params.merge(:id => @tutory.id))  

    @valid = true

    # Aquí comparo solamente el estado de las nuevas actualizaciones entre ellas, para ver si chocan.
    @n_tutory.horarios.each do |horario_tutoria|
      @n_tutory.horarios.each do |horario_otra_tutoria|
        if horario_tutoria.id != horario_otra_tutoria.id
          if horario_tutoria.dias == horario_otra_tutoria.dias
            if ((horario_tutoria.start.strftime("%H:%M") < horario_otra_tutoria.end.strftime("%H:%M") && horario_tutoria.start.strftime("%H:%M") >= horario_otra_tutoria.start.strftime("%H:%M")) && horario_tutoria.end.strftime("%H:%M") > horario_otra_tutoria.end.strftime("%H:%M")) || (horario_tutoria.start.strftime("%H:%M") < horario_otra_tutoria.start.strftime("%H:%M") && (horario_tutoria.end.strftime("%H:%M") <= horario_otra_tutoria.end.strftime("%H:%M") && horario_tutoria.end.strftime("%H:%M") > horario_otra_tutoria.start.strftime("%H:%M"))) || ((horario_tutoria.start.strftime("%H:%M") > horario_otra_tutoria.start.strftime("%H:%M") && horario_tutoria.start.strftime("%H:%M") < horario_otra_tutoria.end.strftime("%H:%M")) && (horario_tutoria.end.strftime("%H:%M") > horario_otra_tutoria.start.strftime("%H:%M") && horario_tutoria.end.strftime("%H:%M") < horario_otra_tutoria.end.strftime("%H:%M"))) || (horario_tutoria.start.strftime("%H:%M") <= horario_otra_tutoria.start.strftime("%H:%M") && horario_tutoria.end.strftime("%H:%M") >= horario_otra_tutoria.end.strftime("%H:%M"))
              @valid = false
              break
            end
          end
        end
      end
    end

    if @valid
      if @tutory.update(tutory_params)
        redirect_to tutories_url
      else
        format.html { render :new }
      end
    end

  end

  # DELETE /tutories/1
  # DELETE /tutories/1.json
  def destroy
    @tutory.destroy
    respond_to do |format|
      format.html { redirect_to tutories_url, notice: 'Tutory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tutory
      @tutory = Tutory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tutory_params
      params.require(:tutory).permit(:ubicacion, :clase_id, :user_id, horarios_attributes: [:id, :dias, :start, :end, :_destroy])
    end
end
