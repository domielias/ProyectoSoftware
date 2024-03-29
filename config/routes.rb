Rails.application.routes.draw do
  resources :programa_epe_solicitados
  devise_for :users
  resources :clase_actividads
  resources :bloque_estudiantes
  resources :bloque_asignaturas
  resources :clase_estudiantes
  root 'pages#home'
  resources :tutories
  resources :horarios
  resources :usuarios
  resources :actividads
  resources :tipo_evaluacions
  resources :evaluacions
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
  resources :ciclos
  resources :categories
  get "egresados", to: "pages#egresados"
  get "no_admitidos", to: "pages#no_admitidos"
  get "ficha_de_solicitud_estudiante", to: "estudiantes#ficha_de_solicitud_estudiante", as: 'ficha_de_solicitud_estudiante'
  get "seleccion_para_estudiante", to: "bloques#seleccion_para_estudiante", as: 'seleccion_para_estudiante'
  get "index_bloque_estudiante", to: "bloques#index_bloque_estudiante", as: 'index_bloque_estudiante'
  get 'configuracion',to: 'pages#configuracion'
  get 'estudiantes/mostrar_horario_actual/:id', to: 'estudiantes#mostrar_horario_actual', as: 'mostrar_horario_actual_estudiante'
  get 'personas/mostrar_horario_actual/:id', to: 'personas#mostrar_horario_actual', as: 'mostrar_horario_actual_persona'
  get 'estudiantes/listar_clases/:id', to: 'estudiantes#listar_clases', as: 'listar_clases_estudiante'
  get 'listar_usuarios', to: 'personas#listar_usuarios', as: 'listar_usuarios'
  get 'ciclos/finalizar/:id', to: 'ciclos#finalizar', as: 'finalizar_ciclo'
  get 'estudiantes/generar_pdf_individual/:id', to: 'estudiantes#generar_pdf_individual', as: 'generar_pdf_individual_estudiante'
  get 'ciclos/generar_pdf_individual/:id', to: 'ciclos#generar_pdf_individual', as: 'generar_pdf_individual_ciclo'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
