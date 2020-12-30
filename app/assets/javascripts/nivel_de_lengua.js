$(document).on('turbolinks:load', function () {
  $("#estudiante_programa_epe_solicitado_id").on('change', function () {
    $.ajax({
      url: '/programa_epe_solicitados/' + $(this).val() + '.json?',
      dataType: 'json',
      type: 'GET'
    })
      .done(function (data) {
        $('.nivel_de_lengua_selection').empty();
        $('.nivel_de_lengua_selection').append($('<option value=""></option>'));
        data.nivels.forEach(function (nivel) {
          $('.nivel_de_lengua_selection').append($('<option value="'+nivel.id+'">'+nivel.nombre+'</option>'));
        });

      })
      .fail(function (data) { })
      .always(function (data) { });
  })
})