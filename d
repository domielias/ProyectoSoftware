[33mcommit 2008149bbde1dc95778e69220ddcea948874a28f[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Merge: 2ffd483 673ab6f
Author: Elias Rodriguez <45079270+domielias@users.noreply.github.com>
Date:   Fri Jul 17 20:41:45 2020 -0400

    Merge branch 'responsive'

[33mcommit 673ab6fc4453da71b6d2ba81bab5e3be53c282cb[m[33m ([m[1;32mresponsive[m[33m)[m
Author: Elias Rodriguez <45079270+domielias@users.noreply.github.com>
Date:   Fri Jul 17 14:12:17 2020 -0400

    Volviendo todas las paginas responsive

[1mdiff --git a/app/assets/stylesheets/application.css b/app/assets/stylesheets/application.css[m
[1mindex 570e64f..e155883 100644[m
[1m--- a/app/assets/stylesheets/application.css[m
[1m+++ b/app/assets/stylesheets/application.css[m
[36m@@ -39,3 +39,8 @@[m
   color: black;[m
   padding: 10px 30px;[m
 }[m
[32m+[m[32m/* Add for yellow small box to adapter the text for ciclo  */[m
[32m+[m[32m.adapt-text h3{[m[41m  [m
[32m+[m[32m  margin-bottom: 1.5rem !important;[m
[32m+[m[32m  font-size: 1.5rem !important;[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/app/controllers/estudiantes_controller.rb b/app/controllers/estudiantes_controller.rb[m
[1mindex ed4ee80..f77c2e6 100644[m
[1m--- a/app/controllers/estudiantes_controller.rb[m
[1m+++ b/app/controllers/estudiantes_controller.rb[m
[36m@@ -123,6 +123,9 @@[m [mend[m
       params.require(:estudiante).permit(:pasaporte, :tiempo_residencia, :numero_residencia, :matricula, :estado_civil, :nombre_conyugue, :nombre_conyugue, :sexo, :egresado, :admitido, :programa_epe_solicitado_id, :bloque_id,:programa_internacional_id, :carrera_solicitada_id, :institucion_id, direccions_attributes: [:id, :telefono, :direccion_completa, :ciudad, :codigo_postal, :pais_residencia, :pai_id], persona_attributes: [:id, :nombres, :apellidos, :fecha_nacimiento, :correo_electronico, :id_campus, :matricula], padre_attributes: [:id, :nombres, :apellidos], madre_attributes: [:id, :nombres, :apellidos], examen_de_nivel_attributes: [:id, :promedio, :nivel_id, :fecha_examen],informacion_academica_attributes: [:id, :cantidad_de_anos_de_espanol_estudiadas, :asignaturas_de_espanol_recientes, :cantidad_de_horas_de_espanol_cursadas, :nivel_alcanzado],progreso_inscripcion_attributes: [:id, :formulario_admisiones, :formulario_especial_para_extranjeros, :visa_estudiante, :acta_nacimiento, :certificacion_medica, :fotografias, :copia_pasaporte, :record_secundaria, :certificado_pruebas_nacionales, :recibo_admision, :seguro_medico_o_viajero, :acta_nacimiento_padres, :record_notas_original_de_univ_de_procedencia])[m
     end[m
 [m
[32m+[m[32m    def solicitud_estudiante_params[m
[32m+[m[32m      params.require(:estudiante).permit(:pasaporte, :estado_civil, :nombre_conyugue, :sexo, :programa_epe_solicitado_id, :bloque_id,:programa_internacional_id, :carrera_solicitada_id, :institucion_id, direccions_attributes: [:id, :telefono, :direccion_completa, :ciudad, :codigo_postal, :pais_residencia, :pai_id], persona_attributes: [:id, :nombres, :apellidos, :fecha_nacimiento, :correo_electronico], padre_attributes: [:id, :nombres, :apellidos], madre_attributes: [:id, :nombres, :apellidos], examen_de_nivel_attributes: [:id, :promedio, :nivel_id, :fecha_examen],informacion_academica_attributes: [:id, :cantidad_de_anos_de_espanol_estudiadas, :asignaturas_de_espanol_recientes, :cantidad_de_horas_de_espanol_cursadas, :nivel_alcanzado])[m
[32m+[m[32m    end[m
     def guardado?[m
       params[:commit] == "Guardar como borrador"[m
     end[m
[1mdiff --git a/app/views/actividads/_form.html.erb b/app/views/actividads/_form.html.erb[m
[1mindex 4bd3761..6f5615e 100644[m
[1m--- a/app/views/actividads/_form.html.erb[m
[1m+++ b/app/views/actividads/_form.html.erb[m
[36m@@ -1,110 +1,111 @@[m
 <%= form_with(model: actividad, local: true) do |form| %>[m
 <% if actividad.errors.any? %>[m
[31m-  <%= render '/shared/errors', obj: @actividad %>[m
[32m+[m[32m<%= render '/shared/errors', obj: @actividad %>[m
 <% end %>[m
 [m
[31m-[m
[31m-<div class="card-container">[m
[31m-  <div class="card card-default">[m
[31m-    <div class="card-header">[m
[31m-      <h3 class="card-title">Datos Generales[m
[31m-      </h3>[m
[31m-      <div class="card-tools">[m
[31m-        <button type="button" class="btn btn-tool" data-card-widget="collapse">[m
[31m-          <i class="fa fa-minus"></i>[m
[31m-        </button>[m
[31m-      </div>[m
[31m-    </div>[m
[31m-    <div class="card-body">[m
[31m-      <% if current_user.admin? %>[m
[31m-      <div class="col-md-12 col-sm-12">[m
[31m-        <div class="form-group">[m
[31m-          <br>[m
[31m-          <h5><%= form.check_box :del_departamento%> Es una actividad planificada por coordinación ?</h5>[m
[32m+[m[32m<div class="container-fluid">[m
[32m+[m[32m  <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 py-3 pl-lg-5 pr-lg-5 bd-content">[m
[32m+[m[32m    <div class="card card-default">[m
[32m+[m[32m      <div class="card-header">[m
[32m+[m[32m        <h3 class="card-title">Datos Generales[m
[32m+[m[32m        </h3>[m
[32m+[m[32m        <div class="card-tools">[m
[32m+[m[32m          <button type="button" class="btn btn-tool" data-card-widget="collapse">[m
[32m+[m[32m            <i class="fa fa-minus"></i>[m
[32m+[m[32m          </button>[m
         </div>[m
       </div>[m
[31m-      <% end %>[m
[31m-      <div class="row col-md-12 col-sm-12">[m
[31m-        <div class="col-md-5 col-sm-5">[m
[32m+[m[32m      <div class="card-body">[m
[32m+[m[32m        <% if current_user.admin? %>[m
[32m+[m[32m        <div class="col-md-12 col-sm-12">[m
           <div class="form-group">[m
[31m-            <h6>Creador</h6>[m
[32m+[m[32m            <br>[m
[32m+[m[32m            <h5><%= form.check_box :del_departamento%> Es una actividad planificada por coordinación ?</h5>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <% end %>[m
[32m+[m[32m        <div class="row col-md-12 col-sm-12">[m
[32m+[m[32m          <div class="col-md-5 col-sm-5">[m
[32m+[m[32m            <div class="form-group">[m
[32m+[m[32m              <h6>Creador</h6>[m
               <%= form.text_field :creador, {value: current_user.persona.id_campus_nombres_apellidos, readonly: true, class: 'form-control'}  %>[m
               <!-- <input class= "form-control" placeholder=<%="#{current_user.persona.id_campus + current_user.persona.nombres + current_user.persona.apellidos}" %> readonly= true> -->[m
               <%= form.hidden_field :user_id, value: current_user.id %>[m
[32m+[m[32m            </div>[m
           </div>[m
[31m-        </div>[m
[31m-        <div class="col-md-3 col-sm-3">[m
[31m-          <div class="form-group">[m
[31m-          </div>[m
[31m-        </div>[m
[31m-        <div class="col-md-4 col-sm-4">[m
[31m-          <div class="form-group">[m
[31m-            <br>[m
[31m-            <h5><%= form.check_box :dentro_de_la_ciudad%> Será dentro de la ciudad ?</h5>[m
[32m+[m[32m          <div class="col-md-3 col-sm-3">[m
[32m+[m[32m            <div class="form-group">[m
[32m+[m[32m            </div>[m
           </div>[m
[31m-        </div>[m
[31m-      </div>[m
[31m-      <div class="row col-md-12 col-sm-12">[m
[31m-        <div class="col-md-6 col-sm-6">[m
[31m-          <div class="form-group">[m
[31m-            <h5>Fecha</h5>[m
[31m-            <%= form.date_field :fecha, {class: "form-control date-input" } %>[m
[32m+[m[32m          <div class="col-md-4 col-sm-4">[m
[32m+[m[32m            <div class="form-group">[m
[32m+[m[32m              <br>[m
[32m+[m[32m              <h5><%= form.check_box :dentro_de_la_ciudad%> Será dentro de la ciudad ?</h5>[m
[32m+[m[32m            </div>[m
           </div>[m
         </div>[m
[31m-        <div class="col-md-6 col-sm-6">[m
[31m-          <div class="form-inline select-time-div-margin">[m
[31m-            <div class="list-inline-item">[m
[31m-              <h8 class='select-time-header-margin'>Desde</h8>[m
[31m-              <%= form.time_select :hora_inicio, { }, { class: 'form-control', default: {hour: '16', minute: '00'}} %>[m
[32m+[m[32m        <div class="row col-md-12 col-sm-12">[m
[32m+[m[32m          <div class="col-md-6 col-sm-6">[m
[32m+[m[32m            <div class="form-group">[m
[32m+[m[32m              <h5>Fecha</h5>[m
[32m+[m[32m              <%= form.date_field :fecha, {class: "form-control date-input" } %>[m
             </div>[m
[31m-            <div class="list-inline-item">[m
[31m-            <h8 class='select-time-header-margin'>Hasta</h8>[m
[31m-            <%= form.time_select :hora_fin, { }, { class: 'form-control', default: {hour: '18', minute: '00'}} %>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div class="col-md-6 col-sm-6">[m
[32m+[m[32m            <div class="form-inline select-time-div-margin">[m
[32m+[m[32m              <div class="list-inline-item">[m
[32m+[m[32m                <h8 class='select-time-header-margin'>Desde</h8>[m
[32m+[m[32m                <%= form.time_select :hora_inicio, { }, { class: 'form-control', default: {hour: '16', minute: '00'}} %>[m
[32m+[m[32m              </div>[m
[32m+[m[32m              <div class="list-inline-item">[m
[32m+[m[32m                <h8 class='select-time-header-margin'>Hasta</h8>[m
[32m+[m[32m                <%= form.time_select :hora_fin, { }, { class: 'form-control', default: {hour: '18', minute: '00'}} %>[m
[32m+[m[32m              </div>[m
             </div>[m
           </div>[m
         </div>[m
[31m-      </div>[m
[31m-      <div class="col-md-12 col-sm-12">[m
[31m-        <h5>Nombre</h5>[m
[31m-        <%= form.text_field :nombre_de_la_actividad, { class: 'form-control'} %>[m
[31m-      </div>[m
[31m-      <div class="col-md-12 col-sm-12">[m
[31m-        <h5>Objetivo</h5>[m
[31m-        <%= form.text_area :objetivo, { class: 'form-control'} %>        [m
[31m-      </div>[m
[31m-      <div class="row col-md-12 col-sm-12">[m
[31m-        <div class="col-md-6 col-sm-6">[m
[31m-          <h5>Ubicación</h5>[m
[31m-          <%= form.text_field :ubicacion, { class: 'form-control'} %>[m
[32m+[m[32m        <div class="col-md-12 col-sm-12">[m
[32m+[m[32m          <h5>Nombre</h5>[m
[32m+[m[32m          <%= form.text_field :nombre_de_la_actividad, { class: 'form-control'} %>[m
         </div>[m
[31m-        <div class="col-md-6 col-sm-6">[m
[31m-          <h5>Forma de transporte</h5>[m
[31m-          <%= form.text_field :forma_de_transporte, { class: 'form-control'} %>[m
[32m+[m[32m        <div class="col-md-12 col-sm-12">[m
[32m+[m[32m          <h5>Objetivo</h5>[m
[32m+[m[32m          <%= form.text_area :objetivo, { class: 'form-control'} %>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div class="row col-md-12 col-sm-12">[m
[32m+[m[32m          <div class="col-md-6 col-sm-6">[m
[32m+[m[32m            <h5>Ubicación</h5>[m
[32m+[m[32m            <%= form.text_field :ubicacion, { class: 'form-control'} %>[m
[32m+[m[32m          </div>[m
[32m+[m[32m          <div class="col-md-6 col-sm-6">[m
[32m+[m[32m            <h5>Forma de transporte</h5>[m
[32m+[m[32m            <%= form.text_field :forma_de_transporte, { class: 'form-control'} %>[m
[32m+[m[32m          </div>[m
         </div>[m
[31m-      </div>[m
 [m
[31m-      <hr/>[m
[31m-      <h5>Clases participantes</h5>[m
[31m-      <!-- Clase.joins(:ciclo).where(:ciclos => {actual: true}) Para solo clases actuales-->[m
[31m-      <% if current_user.admin? %>[m
[31m-      <%= form.collection_select(:clase_ids, Clase.all, :id, :no_clase,[m
[32m+[m[32m        <hr />[m
[32m+[m[32m        <h5>Clases participantes</h5>[m
[32m+[m[32m        <!-- Clase.joins(:ciclo).where(:ciclos => {actual: true}) Para solo clases actuales-->[m
[32m+[m[32m        <% if current_user.admin? %>[m
[32m+[m[32m        <%= form.collection_select(:clase_ids, Clase.all, :id, :no_clase,[m
                                   {selected: actividad.clases.map(&:id)},[m
                                   {class: 'select2-multiple-dropdown select2-dropdown-width', multiple: 'true'}) %>[m
 [m
 [m
[31m-      <% else %>[m
[31m-      <%= form.collection_select(:clase_ids, Clase.where(profesor_id: current_user.id), :id, :no_clase,[m
[32m+[m[32m        <% else %>[m
[32m+[m[32m        <%= form.collection_select(:clase_ids, Clase.where(profesor_id: current_user.id), :id, :no_clase,[m
                                   {selected: actividad.clases.map(&:id)},[m
                                   {class: 'select2-multiple-dropdown select2-dropdown-width', multiple: 'true'}) %>[m
[31m-      <% end %>[m
[32m+[m[32m        <% end %>[m
 [m
[32m+[m[32m      </div>[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <div class="float-left">[m
[32m+[m[32m      <%= link_to 'Regresar', 'javascript:history.back()', class: "btn btn-block btn-outline-primary" %>[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <div class="float-right">[m
[32m+[m[32m      <%= form.submit 'Finalizar', {class: "btn bg-gradient-success",data: { confirm: '¿Desea crear esta actividad?'}} %>[m
     </div>[m
[31m-  </div>[m
[31m-  <div class="float-left">[m
[31m-  <%= link_to 'Regresar', 'javascript:history.back()', class: "btn btn-block btn-outline-primary" %>[m
[31m-  </div>[m
[31m-  <div class="float-right">[m
[31m-    <%= form.submit 'Finalizar', {class: "btn bg-gradient-success",data: { confirm: '¿Desea crear esta actividad?'}} %>[m
   </div>[m
 </div>[m
[31m-<% end %>[m
[32m+[m[32m<% end %>[m
\ No newline at end of file[m
[1mdiff --git a/app/views/actividads/edit.html.erb b/app/views/actividads/edit.html.erb[m
[1mindex 98bc529..b2a4c00 100644[m
[1m--- a/app/views/actividads/edit.html.erb[m
[1m+++ b/app/views/actividads/edit.html.erb[m
[36m@@ -1,4 +1,4 @@[m
[31m-<h1 class="card-container">Editando Actividad</h1>[m
[32m+[m[32m<h1 class="text-center">Editando Actividad</h1>[m
 [m
 <%= render 'form', actividad: @actividad %>[m
 [m
[1mdiff --git a/app/views/actividads/new.html.erb b/app/views/actividads/new.html.erb[m
[1mindex 0974775..aad4af9 100644[m
[1m--- a/app/views/actividads/new.html.erb[m
[1m+++ b/app/views/actividads/new.html.erb[m
[36m@@ -1,4 +1,4 @@[m
[31m-<h1 class="card-container">Nueva Actividad</h1>[m
[32m+[m[32m<h1 class="text-center">Nueva Actividad</h1>[m
 [m
 <%= render 'form', actividad: @actividad %>[m
 [m
[1mdiff --git a/app/views/actividads/show.html.erb b/app/views/actividads/show.html.erb[m
[1mindex ec0a611..a7fd5eb 100644[m
[1m--- a/app/views/actividads/show.html.erb[m
[1m+++ b/app/views/actividads/show.html.erb[m
[36m@@ -1,46 +1,47 @@[m
 <%= form_with(model: @actividad, local: true) do |form| %>[m
 <% if @actividad.errors.any? %>[m
[31m-  <%= render '/shared/errors', obj: @actividad %>[m
[32m+[m[32m<%= render '/shared/errors', obj: @actividad %>[m
 <% end %>[m
 [m
 [m
[31m-<div class="card-container">[m
[31m-  <div class="card card-default">[m
[31m-    <div class="card-header">[m
[31m-      <h3 class="card-title">Datos Generales[m
[31m-      </h3>[m
[31m-      <div class="card-tools">[m
[31m-        <button type="button" class="btn btn-tool" data-card-widget="collapse">[m
[31m-          <i class="fa fa-minus"></i>[m
[31m-        </button>[m
[31m-      </div>[m
[31m-    </div>[m
[31m-    <div class="card-body">[m
[31m-      <div class="col-md-12 col-sm-12">[m
[31m-        <div class="form-group">[m
[31m-          <br>[m
[31m-          <h5>Es una actividad planificada por el coordinación ?: <%= @actividad.del_departamento ? :Sí : :No %></h5>[m
[32m+[m[32m<div class="container-fluid">[m
[32m+[m[32m  <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 py-3 pl-lg-5 pr-lg-5 bd-content">[m
[32m+[m[32m    <div class="card card-default">[m
[32m+[m[32m      <div class="card-header">[m
[32m+[m[32m        <h3 class="card-title">Datos Generales[m
[32m+[m[32m        </h3>[m
[32m+[m[32m        <div class="card-tools">[m
[32m+[m[32m          <button type="button" class="btn btn-tool" data-card-widget="collapse">[m
[32m+[m[32m            <i class="fa fa-minus"></i>[m
[32m+[m[32m          </button>[m
  