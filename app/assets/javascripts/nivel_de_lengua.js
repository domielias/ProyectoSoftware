$(document).on('turbolinks:load', function () {

    // Declarar el arreglo que contendrá todos los programas y niveles de los bloques marcados para selección estudiante
    programa_nivel_nivel_arr = {};

    // Vaciar los selects de programa y nivel
    $('.programa_epe_solicitado_selection').empty().addClass("custom-select");
    $('.nivel_de_lengua_selection').empty().addClass("custom-select");

    // Agregar una opción vacía a los selects
    // $('.programa_epe_solicitado_selection').append($('<option value="" disabled selected></option>'));
    // $('.nivel_de_lengua_selection').append($('<option value="" disabled selected>Seleccione un Programa EPE</option>'));

    // Obtener los bloques para selección por ajax
    $.ajax({
        url: '/bloques.json?seleccion_estudiante=true',
        dataType: 'json',
        type: 'GET'
    }).done(function (data) {

        // Por cada bloque, hacer una entrada en el json programa_nivel_nivel_arr que tenga como valor el id del
        // programa y, como valor, un arreglo de arreglos. Esos arreglos serán el id y nombre de cada nivel.
        // El primer valor de cada value será siempre el nombre del programa
        // Por ej
        // 1: Array(5)
        //     0: "LAE"
        //     1: (2) [1, "A1"]
        //     2: (2) [1, "A1"]
        //     3: (2) [5, "X9"]
        //     4: (2) [2, "B1"]
        // 2: Array(5)
        //     0: "International Studies Abroad (ISA)"
        //     1: (2) [1, "A1"]
        //     2: (2) [1, "A1"]
        //     3: (2) [5, "X9"]
        //     4: (2) [3, "X1"]
        data.forEach(function (bloque) {
            if(programa_nivel_nivel_arr[bloque.programa_epe_solicitado.id] === undefined) {
                programa_nivel_nivel_arr[bloque.programa_epe_solicitado.id] = [];
                programa_nivel_nivel_arr[bloque.programa_epe_solicitado.id].push(bloque.programa_epe_solicitado.nombre)
            }
            programa_nivel_nivel_arr[bloque.programa_epe_solicitado.id].push([bloque.nivel.id, bloque.nivel.nombre]);

        });

        // Agregar los valores al dropdown de programa
        for (var key in programa_nivel_nivel_arr) {
            $('.programa_epe_solicitado_selection').append($('<option value="'+key+'">'+programa_nivel_nivel_arr[key][0]+'</option>'));
        }

        // Seleccionar el primer Programa EPE por defecto
        $("#estudiante_programa_epe_solicitado_id").prop("selectedIndex", 0);

        // Seleccionar el primer nivel del primer Programa EPE por defecto
        programa_nivel_nivel_arr[1].slice(1).forEach(function(value) {
            $('.nivel_de_lengua_selection').append($('<option value="'+value[0]+'">'+value[1]+'</option>'));
        });

    });

    // Cada vez que cambie el programa en el select
  $("#estudiante_programa_epe_solicitado_id").on('change', function () {
      // Vaciar el select de nivel
      $('.nivel_de_lengua_selection').empty();

      // Llenar el select de nivel con los niveles del programa seleccionado
      programa_nivel_nivel_arr[$(this).val()].slice(1).forEach(function(value) {
          $('.nivel_de_lengua_selection').append($('<option value="'+value[0]+'">'+value[1]+'</option>'));
      });

  })
})