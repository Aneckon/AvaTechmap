$(document).ready(function () {
  $('.header__menu-images').click(function () {
    $('.header__menu-images').toggleClass('menu__open');
    $('.header__menu').toggleClass('menu__open');
    $('body').toggleClass('fixed');
  });
});

$(document).ready(function () {
  $('.ua').click(function () {
    $('.countryitem').hide();
    $('.ukraina__item').show();
  });
  $('.gr').click(function () {
    $('.countryitem').hide();
    $('.germania__item').show();
  });
  $('.bl').click(function () {
    $('.countryitem').hide();
    $('.belarus__item').show();
  });
  $('.pl').click(function () {
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

$(document).ready(function () {
  $('.products__button').click(function () {
    $('.products__none').show();
  });
});

$(document).ready(function () {
  $('.fillter__left').click(function () {
    $('.fillter__left').toggleClass("open__fillter-down");
    $('.fillter__left-text').toggleClass("open__fillter");
  });
  $('.fillter__right').click(function () {
    $('.fillter__right').toggleClass("open__fillter-down");
    $('.fillter__right-text').toggleClass("open__fillter");
  });
  $('.footer__item-dropdown').click(function () {
    $('.footer__item-dropdown__content').toggleClass("open__dropdawn");
  });
});
$(document).ready(function () {
  $('.swiper__info-btn').click(function () {
    $('.swiper__info').toggleClass("open__info");
  });
});