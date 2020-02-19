Rails.application.routes.draw do
  resources :carrera_solicitadas
  resources :categories
  resources :rols
  resources :facultads
  resources :pais
  resources :personas
  resources :temporadas
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
