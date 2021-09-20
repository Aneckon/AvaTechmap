$(document).ready(function() {
    $('.header__menu-images').click(function() {
        $('.header__menu-images').toggleClass('menu__open');
        $('.header__menu').toggleClass('menu__open');
        $('body').toggleClass('fixed');
    });
});

$(document).ready(function() {
  $('.ua').click(function() {
      $('.countryitem').hide();
      $('.ukraina__item').show();
  });
  $('.gr').click(function() {
    $('.countryitem').hide();
    $('.germania__item').show();
  });
  $('.bl').click(function() {
    $('.countryitem').hide();
    $('.belarus__item').show();
  });
  $('.pl').click(function() {
    $('.countryitem').hide();
    $('.pol__item').show();
  });
});



var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});