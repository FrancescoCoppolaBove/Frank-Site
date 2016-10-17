/*      FUNCTION TYPED.JS      */

$(function(){
  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    loop: true,
    typeSpeed: 90,
    backSpeed: 0,
    contentType: 'html'
  });
});


/*      FUNCTION HAMBURGER      */
var $hamburger =  $(".hamburger");
$hamburger.on("click", function(e){
  {
    $hamburger.toggleClass("is-active");
    $(".main").toggleClass("show-menu");
  }
});
