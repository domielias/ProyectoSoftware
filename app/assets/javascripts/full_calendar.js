var initialize_calendar;
initialize_calendar = function() {
  $('.calendar').each(function() {
    var calendar = $(this)
    calendar.fullCalendar({
      header: {
        left: '',
        // center: '',
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
      firstDay: 1,
      minTime: '07:00:00',
      maxTime: '22:00:00',
      // timeFormat: 'H:(mm)',
      columnFormat: 'dddd',
      // events: [{
      //   title: "My repeating event",
      //   start: '10:00', // a start time (10am in this example)
      //   end: '14:00', // an end time (2pm in this example)
      //   dow: [1, 4] // Repeat monday and thursday
      // }]
      // events: '/estudiantes/listar_clases/' + 8 + '.json'
    });
  })
};
$(document).on('turbolinks:load', initialize_calendar);
console.log(start.toISOString())
