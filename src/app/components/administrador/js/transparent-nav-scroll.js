$(function () {
  /*$(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });*/

  $(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-inverse");
    } else {
        $("#menu").removeClass("bg-inverse");
    }
  });

});
