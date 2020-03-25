//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require select2
//= require datatables
//= require select2_locale_es
//= require bootstrap-datepicker

$(document).on('turbolinks:load', function () {
  $('.select2-simple-dropdown').select2({placeholder: "Elegir", allowClear: true, width: '100%'});
});
$(document).on('turbolinks:load', function () {
  $('.select2-multiple-dropdown').select2({allowClear: true, placeholder: "Elegir 1 o más", closeOnSelect: false, width: '100%'});

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
      "ordering": false,
      "language": {
        "search": "Buscar:"
      },
      "paging": false,
      "pageLength": 10,
      "pagingType": "full_numbers"
    });
    $('input').addClass('form-control');
  });
})
