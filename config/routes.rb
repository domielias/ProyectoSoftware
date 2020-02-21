Rails.application.routes.draw do

  resources :usuarios
  resources :actividads
  resources :tipo_evaluacions
  resources :evaluacions
  resources :aulas
  resources :edificios
  resources :modalidads
  resources :clases
  resources :bloques
  resources :asignaturas
  resources :institucions
  resources :personas
  resources :estudiantes
  resources :facultads
  resources :direccions
  resources :informacion_academicas
  resources :carrera_solicitadas
  resources :programa_internacionals
  resources :examen_de_nivels
  resources :progreso_inscripcions
  resources :nivels
  resources :pais
  resources :rols
  resources :temporadas
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
