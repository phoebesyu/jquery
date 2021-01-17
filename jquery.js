$(document).ready(function () {
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdownlist a').slideToggle();
        
    });
  
      
      
  

    $('.totop a ').click(function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
    






    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
});