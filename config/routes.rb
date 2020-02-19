Rails.application.routes.draw do

  resources :estudiantes
  resources :facultads
  resources :direccions
  resources :informacion_academicas
  resources :carrera_solicitadas
  resources :universidads
  resources :programa_internacionals
  resources :examen_de_nivels
  resources :progreso_inscripcions
  resources :nivels
  resources :pais
  resources :personas
  resources :rols
  resources :temporadas
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
