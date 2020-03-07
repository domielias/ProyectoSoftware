class PagesController < ApplicationController

    def home
    end

    def egresados
        @estudiantes = Estudiante.all
    end

    def no_admitidos
        @estudiantes = Estudiante.all
    end
    def configuracion
        @edificio=Edificio.new
        @aula=Aula.all
    end
end