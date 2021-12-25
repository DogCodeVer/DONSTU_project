(function ($) {



// scroll 


$("#header-down-button-wrepper-id").on("click","a", function (event) {
  event.preventDefault();

  let id  = $(this).attr('href');
  let top = $(id).offset().top;

  $('body,html').animate({scrollTop: top}, 800);

});

$("#header-down-button-wrepper-idd").on("click","a", function (event) {
  event.preventDefault();

  let id  = $(this).attr('href');
  let top = $(id).offset().top;

  $('body,html').animate({scrollTop: top}, 800);

});

$("#header-down-button-wrepper-iddd").on("click","a", function (event) {
  event.preventDefault();

  let id  = $(this).attr('href');
  let top = $(id).offset().top;

  $('body,html').animate({scrollTop: top}, 800);

});

// scroll end
	

})( jQuery );