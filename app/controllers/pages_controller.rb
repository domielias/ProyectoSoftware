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
    end
    def ficha_de_solicitud_estudiante
        @estudiante = Estudiante.new
        @estudiante.build_carrera_solicitada
        @estudiante.build_persona
        @estudiante.build_programa_internacional
        @estudiante.build_padre
        @estudiante.build_madre
        2.times {@estudiante.direccions.build}
        @estudiante.build_examen_de_nivel
        @estudiante.build_informacion_academica
        @estudiante.build_progreso_inscripcion
    end
end
