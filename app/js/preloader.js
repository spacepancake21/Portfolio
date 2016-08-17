$(function () {

  // Preloader

  var imgs = [];

  $.each($('*'), function () {

    var
      $this = $(this),
      img = $this.is('img'),
      background = $this.css('background-image');

    if (background != 'none') {

      var path = background.replace('url("', '').replace('")', '');
      imgs.push(path);

    }

    if (img) {

      var path = $this.attr('src');

      if (path) {
        imgs.push(path);
      }

    }

  });

  var percents = 1;

  for (var i = 0; i < imgs.length; i++) {

    var image = $('<img>', {
      attr: {
        src: imgs[i]
      }
    });

    image.on('load', function () {
      setPercents(imgs.length, percents);
      percents++;
    });

  }

  function setPercents(total, current) {

    var percent = Math.ceil(current / total * 100);

    $('.preloader__percent').text(percent);

    if (percent >= 100) {
      $('.wrapper').css('display', 'block');
      $('.footer').css('display', 'block');
      $('.preloader').delay(1000).fadeOut(1500);
    }

  }

});