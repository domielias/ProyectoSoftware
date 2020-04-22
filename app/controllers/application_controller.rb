class ApplicationController < ActionController::Base
protect_from_forgery with: :exception

    before_action :authenticate_user!
     before_action :configure_permitted_parameters, if: :devise_controller?

     protected
          def configure_permitted_parameters
               devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :password_confirmation, :admin, :profesor, persona_attributes: [:id, :nombres, :apellidos, :id_campus])}

               devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :current_password, :admin, :profesor, persona_attributes: [:id, :nombres, :apellidos, :id_campus])}
          end

          before_filter :set_cache_headers

    private

    def set_cache_headers
      response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
      response.headers["Pragma"] = "no-cache"
      response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
    end


end
