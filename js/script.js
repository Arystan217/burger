$(document).ready(function() {

  /* $('.button').on('click', function(){
    alert ("кнопка нажата!");
  }); */

  $('.button').click( function() {
    $('h1').toggleClass('colorRed');
  });

  $('.burger-nav').on('click', function() {
    $('.burger').toggleClass('active');
    $('.burger-nav').toggleClass('burger__opened');
  });

});