$(document).on 'turbolinks:load', ->
  
  jQuery ->

    $('form').on 'click', '.remove_fields', (event) ->
      $(this).prev('input[type=hidden]').val('1')
      # $(this).closest('div').parent().hide()
      $(this).closest('div').parent().parent().parent().hide()
      event.preventDefault()

    $('form').on 'click', '.remove_clase', (event) ->
      $(this).prev('input[type=hidden]').val('1')
      $(this).closest('div').parent().parent().hide()
      event.preventDefault()

    $('form').on 'click', '.add_fields', (event) ->
      time = new Date().getTime()
      regexp = new RegExp($(this).data('id'), 'g')
      $(this).before($(this).data('fields').replace(regexp, time))
      event.preventDefault()
      init_select2()
