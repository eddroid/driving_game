// Generated by CoffeeScript 1.3.3
(function() {

  $(document).ready(function() {
    var current_idx, n, url,
      _this = this;
    $('#blueCar').delay(1000).queue(function() {
      return $(this).css({
        'top': '320px'
      });
    });
    $('#whiteCar').delay(1000).queue(function() {
      return $(this).css({
        'left': '320px'
      });
    });
    $('#greenCar').delay(1000).queue(function() {
      return $(this).css({
        'top': '90px'
      });
    });
    $('#redCar').delay(1000).queue(function() {
      return $(this).css({
        'left': '100px'
      });
    });
    $('#purpleCar').delay(5000).queue(function() {
      return $(this).css({
        'top': '410px'
      });
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
    $('#next').attr('href', 'level' + n + '.html');
    return $('#wrong').bind('click', function(event) {
      return $('#sound_wrong')[0].play();
    });
  });

}).call(this);
