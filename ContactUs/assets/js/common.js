$(window).scroll(function() {
if ($(this).scrollTop() > 10){  
    $('nav').removeClass("no-background");
  }
  else{
    $('nav').addClass("no-background");
  }
});
