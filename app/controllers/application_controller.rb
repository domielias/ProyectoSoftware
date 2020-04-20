class ApplicationController < ActionController::Base
protect_from_forgery with: :exception

    before_action :authenticate_user!
     before_action :configure_permitted_parameters, if: :devise_controller?

     protected
          def configure_permitted_parameters
               devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :admin, :profesor, persona_attributes: [:id, :nombres, :apellidos, :id_campus])}

               devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :current_password, :admin, :profesor, persona_attributes: [:id, :nombres, :apellidos, :id_campus])}
          end


end
