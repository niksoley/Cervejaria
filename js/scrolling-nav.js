$('a').click(function() {
  $('html, body').animate({
    scrollTop: ($($(this).attr('href')).offset().top) - 0
  }, 500);
  return false;
});

$('.primeiro').click(function() {
  console.log("teste");
  $('html, body').animate({
    scrollTop: ($($(this).attr('href')).offset().top) - 100
  }, 500);
  return false;
});