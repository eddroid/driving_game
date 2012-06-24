$(document).ready ->
  $('#blueCar').delay(2000).css({'top': '614px' })
  $('#whiteCar').delay(2000).css({'left': '560px' })
  $.facebox.settings.opacity = 0.2
  $('a[rel*=facebox]').facebox()
