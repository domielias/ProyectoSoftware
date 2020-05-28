//Override the default confirm dialog by rails
$.rails.allowAction = function(link){
  if (link.data("confirm") == undefined){
    return true;
  }
  // console.log(link);
  // console.log(link.data("confirm"));
  $.rails.showConfirmationDialog(link);
  return false;
  
}

//User click confirm button
$.rails.confirmed = function(link){
  link.data("confirm", null);
  link.trigger("click.rails");
  // console.log(link.trigger);
  // link.trigger($.rails.click.rails);
  // Turbolinks.visit(link.attr('form'));
}
//User click confirm button
// $.rails.confirmed = function(link){
//   link.data("confirm", null);
//   Turbolinks.visit(link.attr('href'))
// }

//Display the confirmation dialog
$.rails.showConfirmationDialog = function(link){
  var message = link.data("confirm");
  swal({
    title: message,
    type: 'warning',
    confirmButtonText: 'Confirmar',
    confirmButtonColor: '#2acbb3',
    showCancelButton: true,
    closeOnConfirm: false,
    closeOnCancel: true,
    closeOnClickOutside: true,
  }).then(function (isConfirm) {
    console.log(isConfirm['value']);
    console.log(link);
    if((isConfirm['dismiss']!="cancel" && isConfirm['dismiss']!="overlay")){
      swal("Guardado", "Información guardada correctamente", "success");
      $.rails.confirmed(link);
    }
    else if(isConfirm['dismiss'] =="cancel"){
      console.log("Cancelar");
    }
    else if(isConfirm['dismiss'] =="overlay"){
      // swal("Deleted!", "Your imaginary file has been ted!", "warning");
      console.log("Afuera");
    }
});
};
// //Override the default confirm dialog by rails
// $.rails.allowAction = function(link){
//   if (link.data("confirm") == undefined){
//     return true;
//   }
//   $.rails.showConfirmationDialog(link);
//   console.log(link.data("confirm"));
//   console.log(link.data);
//   console.log(link);
//   return false;
// }

// //User click confirm button
// $.rails.confirmed = function(link){
//   link.data("confirm", null);
//   link.trigger("click.rails");
// }

// //Display the confirmation dialog
// $.rails.showConfirmationDialog = function(link){
//   var message = link.data("confirm");
//   swal({
//     title: message,
//     type: 'warning',
//     confirmButtonText: 'Sure',
//     confirmButtonColor: '#2acbb3',
//     showCancelButton: true
//   }).then(function(e){
//        console.log(link)
//     $.rails.confirmed(link);
//   });
// };