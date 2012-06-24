$(document).ready ->
  $('#blueCar').delay(1000).queue(->
    $(this).css({'top': '320px' })
  )
  $('#whiteCar').delay(1000).queue(->
    $(this).css({'left': '320px' })
  )
  $('#greenCar').delay(1000).queue(->
        $(this).css({'top': '90px' })
  )
  $('#redCar').delay(1000).queue(->
        $(this).css({'left': '100px' })
  )
  $('#purpleCar').delay(5000).queue(->
    $(this).css({'top': '410px' })
  )

  $.facebox.settings.opacity = 0.2
  $('a[rel*=facebox]').facebox()

  url = document.URL
  current_idx = parseInt(url.charAt(url.indexOf('level') + 5))
  n = current_idx
  # CoffeeScript has no do/while loop
  loop
    n = Math.ceil(Math.random() * 2)
    break if n != current_idx
  $('#next').attr('href', 'level' + n + '.html')

  $('#wrong').bind 'click', (event) =>
    $('#sound_wrong')[0].play()

