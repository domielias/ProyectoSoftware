module ApplicationHelper
  def link_to_add_fields(name, form, association, btn_style)
    new_object = form.object.send(association).klass.new
    id = new_object.object_id
    fields = form.fields_for(association, new_object, child_index: id) do |builder|
      render(association.to_s.singularize+"_fields", form: builder)
    end
    link_to(name, "#", class: "add_fields #{btn_style}", data: {id: id, fields: fields.gsub("\n", "")})
  end
end
