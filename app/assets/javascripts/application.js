//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require select2
//= require datatables
//= require select2_locale_es
//= require bootstrap-datepicker
//= require font_awesome5
//= require jquery.overlayScrollbars
//= require moment
//= require fullcalendar
//= require adminlte
//= require_tree .

// function eventCalendar() {
//   return $('#calendar').fullCalendar({
//     title:'Horario',
//     header: {
//       left: '',
//       center: 'title',
//       right: ''
//     },
//     allDaySlot: false,
//     defaultView: 'agendaWeek',
//     minTime: '08:00:00',
//     maxTime: '22:00:00',
//
//   });
// };
// function clearCalendar() {
//   $('#calendar').fullCalendar('delete'); // In case delete doesn't work.
//   $('#calendar').html('');
// };
// $(document).on('turbolinks:load', eventCalendar);
// $(document).on('turbolinks:before-cache', clearCalendar)

function init_select2(){
  $('.select2-simple-dropdown').select2({
    placeholder: "Elegir",
    allowClear: true,
    width: '100%',
    language: "es"
  });
  $('.select2-multiple-dropdown').select2({
    allowClear: true,
    placeholder: "Elegir 1 o más",
    closeOnSelect: false,
    width: '100%',
    language: "es"
  });
};

$(document).on('turbolilisdatatableta_horarionks:load', function () {
  $('.select2-simple-dropdown').select2({placeholder: "Elegir", allowClear: true, width: '100%', language: "es"});
});

$(document).on('turbolinks:load', function () {
  $('.select2-multiple-dropdown').select2({allowClear: true, placeholder: "Elegir 1 o más", closeOnSelect: false, width: '100%', language: "es"});
});

$(document).ready(function () {
  $('.datepicker').datepicker({format: 'dd/mm/yyyy'});
});

$(document).ready(function () {
  $('#myTable').DataTable();
});

$(document).on('turbolinks:load', function() {
  $("table[role='datatable']").each(function() {
    $(this).DataTable({
      "destroy": true,
      "language": {
        "search": "Buscar:"
      },
      "pageLength": 10,
      "pagingType": "full_numbers"
    });
    $('input').addClass('form-control');
  });
})

$(document).on('turbolinks:load', function() {
  $("table[role='lista_estudiantes_clase_datatable']").each(function() {
    $(this).DataTable({
      "destroy": true,
      "language": {
        "search": "Buscar:"
      },
      "bPaginate": false,
      "pagingType": "full_numbers"
    });
    $('input').addClass('form-control');
  });
})

$(document).on('turbolinks:load', function() {
  $("table[role='lista_horario']").each(function() {
    $(this).DataTable({
      "destroy": true,
      "language": {
        "search": "Buscar:"
      },
      'paging': false,
      "pagingType": "full_numbers",
      "bInfo": false,
      'searching': false
    });
    $('input').addClass('form-control');
  });
})
