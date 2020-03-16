class BloquesController < ApplicationController
  before_action :set_bloque, only: [:show, :edit, :update, :destroy]

  # GET /bloques
  # GET /bloques.json
  def index
    @bloques = Bloque.all
  end

  # GET /bloques/1
  # GET /bloques/1.json
  def show
  end

  # GET /bloques/new
  def new
    @bloque = Bloque.new
    @bloque.build_category
    @bloque.build_temporada
  end

  # GET /bloques/1/edit
  def edit
  end

  # POST /bloques
  # POST /bloques.json
  def create
    @bloque = Bloque.new(bloque_params)
    respond_to do |format|
      if @bloque.save
        format.html { redirect_to @bloque, notice: 'Bloque was successfully created.' }
        format.json { render :show, status: :created, location: @bloque }
      else
        format.html { render :new }
        format.json { render json: @bloque.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bloques/1
  # PATCH/PUT /bloques/1.json
  def update
    respond_to do |format|
      if @bloque.update(bloque_params)
        format.html { redirect_to @bloque, notice: 'Bloque was successfully updated.' }
        format.json { render :show, status: :ok, location: @bloque }
      else
        format.html { render :edit }
        format.json { render json: @bloque.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bloques/1
  # DELETE /bloques/1.json
  def destroy
    @bloque.destroy
    respond_to do |format|
      format.html { redirect_to bloques_url, notice: 'Bloque was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bloque
      @bloque = Bloque.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bloque_params
      params.require(:bloque).permit(:fecha_inicio, :fecha_final, :category_id, :temporada_id, asignaturas_ids:[])
    end
end
