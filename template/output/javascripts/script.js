// Generated by CoffeeScript 1.3.3
(function() {

  $(document).ready(function() {
    var current_idx, n, url;
    $('#blueCar').delay(2000).css({
      'top': '320px'
    });
    $('#whiteCar').delay(2000).css({
      'left': '320px'
    });
    $('#greenCar').delay(2000).css({
      'top': '390px'
    });
    $.facebox.settings.opacity = 0.2;
    $('a[rel*=facebox]').facebox();
    url = document.URL;
    current_idx = parseInt(url.charAt(url.indexOf('level') + 5));
    n = current_idx;
    while (true) {
      n = Math.ceil(Math.random() * 2);
      if (n !== current_idx) {
        break;
      }
    }
    return $('#next').attr('href', 'level' + n + '.html#anchor');
  });

}).call(this);
