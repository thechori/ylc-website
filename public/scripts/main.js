$(function() {
    $('#header_nav').data('size','big');
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {

    if ($('#header_nav').data('size') == 'big') {

      $('#header_nav').data('size','small');

      // Animate the header_nav bar
      $('#header_nav').animate({
        height:'40px'
      },600);

      // Animate the image
      $('#logo-img').animate({
        height: "toggle"
      });
    }
  }
  else {
    if ($('#header_nav').data('size') == 'small') {

      $('#header_nav').data('size','big');

      // Animate the header_nav bar
      $('#header_nav').animate({
        height:'100px'
      },600);

      // Animate the image
      $('#logo-img').animate({
        height: "toggle"  
      });
    }
  }
});
