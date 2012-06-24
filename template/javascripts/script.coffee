$(document).ready ->
  $('#blueCar').delay(2000).css({'top': '320px' })
  $('#whiteCar').delay(2000).css({'left': '320px' })
  $('#greenCar').delay(2000).css({'top': '90px' })

  $.facebox.settings.opacity = 0.2
  $('a[rel*=facebox]').facebox()

  url = document.URL
  current_idx = parseInt(url.charAt(url.indexOf('level') + 5))
  n = current_idx
  # CoffeeScript has no do/while loop
  loop
    n = Math.ceil(Math.random() * 2)
    break if n != current_idx
  $('#next').attr('href', 'level' + n + '.html#anchor')

