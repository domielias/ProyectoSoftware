var initialize_calendar;
initialize_calendar = function() {
  $('.calendar').each(function() {
    var calendar = $(this)
    calendar.fullCalendar({
      header: {
        left: '',
        center: '',
        right: ''
      },
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      aspectRatio: 2.4,
      height: 'auto',
      selectable: false,
      selectHelper: true,
      editable: false,
      allDaySlot: false,
      defaultView: 'agendaWeek',
      minTime: '07:00:00',
      maxTime: '22:00:00',
      timeFormat: 'H:(mm)',
      columnFormat: 'dddd'
    });
  })
};
$(document).on('turbolinks:load', initialize_calendar);
