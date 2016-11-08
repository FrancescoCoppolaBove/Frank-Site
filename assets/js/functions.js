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


/*      HEADER HIDDEN OR NOT      */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var headerHeight = $('header').outerHeight();

$(window).scroll(function(event){
  didScroll = true;

});

setInterval(function(){
  if(didScroll){
    hasScrolled();
    didScroll = false;
  }
}, 250);


function hasScrolled(){
  var wScroll = $(this).scrollTop();

  if(Math.abs(lastScrollTop - wScroll) <= delta )
    return;


  if(wScroll > lastScrollTop && wScroll > headerHeight){
    $('header').addClass('is-hidden');
  }else{
    if(wScroll + $(window).height() < $(document).height()){
      $('header').removeClass('is-hidden');
      $('header').addClass('on-scrolling');
    }
  }

  lastScrollTop = wScroll;

  if(wScroll == 0){
    $('header').removeClass('on-scrolling');
  }
}

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.inner-about').offset().top -
  ($(window).height() / 1.5 )){
    $("#svg path").addClass("svg");
  }
});
