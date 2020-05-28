class ProgramaInternacionalsController < ApplicationController
  load_and_authorize_resource
  before_action :set_programa_internacional, only: [:show, :edit, :update, :destroy]

  # GET /programa_internacionals
  # GET /programa_internacionals.json
  def index
    @programa_internacionals = ProgramaInternacional.all
  end

  # GET /programa_internacionals/1
  # GET /programa_internacionals/1.json
  def show
  end

  # GET /programa_internacionals/new
  def new
    @programa_internacional = ProgramaInternacional.new
    @programa_internacional.build_pai
  end

  # GET /programa_internacionals/1/edit
  def edit
  end

  # POST /programa_internacionals
  # POST /programa_internacionals.json
  def create
    @programa_internacional = ProgramaInternacional.new(programa_internacional_params)

    # respond_to do |format|
      if @programa_internacional.save
        redirect_to configuracion_path
        # format.html { redirect_to @programa_internacional, notice: 'Programa internacional was successfully created.' }
        # format.json { render :show, status: :created, location: @programa_internacional }
      else
        # format.html { render :new }
        # format.json { render json: @programa_internacional.errors, status: :unprocessable_entity }
      end
  end

  # PATCH/PUT /programa_internacionals/1
  # PATCH/PUT /programa_internacionals/1.json
  def update
    respond_to do |format|
      if @programa_internacional.update(programa_internacional_params)
        format.html { redirect_to @programa_internacional, notice: 'Programa internacional was successfully updated.' }
        format.json { render :show, status: :ok, location: @programa_internacional }
      else
        format.html { render :edit }
        format.json { render json: @programa_internacional.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /programa_internacionals/1
  # DELETE /programa_internacionals/1.json
  def destroy
    @programa_internacional.destroy
    respond_to do |format|
      format.html { redirect_to programa_internacionals_url, notice: 'Programa internacional was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_programa_internacional
      @programa_internacional = ProgramaInternacional.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def programa_internacional_params
      # params.require(:programa_internacional).permit(:nombre, pai_attributes: [:id, :nombre, :nacionalidad])
      params.require(:programa_internacional).permit(:nombre, :pai_id,:institucion_id)
    end
end
