usuario= User.new(email: "admin@admin.com", admin:true, profesor: true, password: "password123", password_confirmation: "password123")
persona=Persona.new(nombres:"Admin", apellidos: "Admin", fecha_nacimiento: Date.new(), correo_electronico: "admin@admin.com", matricula: "99999999")
persona.save!
usuario.persona=persona
usuario.save!