$(document).ready(function(){
    
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // $('.header_area .main_menu .main_li > a').mouseenter(function(){
  //   $(this).siblings('.sub_menu').addClass('on');
  // });
  // $('.sub_menu').mouseleave(function(){
  //   $('.header_area .main_menu .main_li > a').siblings('.sub_menu').removeClass('on');
  // });
  
});
