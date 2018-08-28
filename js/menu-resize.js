function screenChange(screenWidth) {
  if (screenWidth < 768) {
    $("#carouselExampleControls").removeClass("display");
    $("#noCarousel").addClass("display");
    $(".992").addClass("display");
    $(".768").removeClass("display");
    $(window).scroll(function() {
      var scrolledY = $(window).scrollTop();

    });


    $(window).scroll(function() {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {

      } else {

      };
    });

  } else if (screenWidth >= 768 && screenWidth < 992) {

    $("#carouselExampleControls").addClass("display");
    $("#noCarousel").removeClass("display");
    $(".992").removeClass("display");
    $(".768").addClass("display");



    $(window).scroll(function() {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {


      } else {

      };
    });
  } else if (screenWidth >= 992) {

    $("#carouselExampleControls").addClass("display");
    $("#noCarousel").removeClass("display");
    $(".992").removeClass("display");
    $(".768").addClass("display");

    if (screenWidth > 2000) {
      var borda = (screenWidth / 100);

    };

    $(window).scroll(function() {
      var scrollh = $(this).scrollTop();
      if (scrollh <= 50) {

      };
    });
  }
};

screenChange(window.innerWidth);






$(window).resize(function() {






  screenChange(window.innerWidth);

});