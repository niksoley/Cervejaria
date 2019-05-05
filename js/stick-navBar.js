var header = $(".navbar992");


if (screen.width > 768) {
  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 290) {
        header.addClass("sticky");
        var larguraNavbar = $('#logo').width();
        $('.sticky').outerWidth(larguraNavbar);
      } else {
        header.removeClass("sticky");
      }
    });

  });
}

$(window).resize(function() {
  var larguraNavbar = $('#logo').width();
  header.outerWidth(larguraNavbar);

  if (screen.width > 768) {
    $(function() {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 290) {
          header.addClass("sticky");
          header.outerWidth(larguraNavbar);
        } else {
          header.removeClass("sticky");
          header.outerWidth(larguraNavbar);
        }
      });
    });
  }
});