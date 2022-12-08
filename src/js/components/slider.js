import { Swiper } from "swiper/bundle";

// Инициализация слайдеров

const newSwiper = new Swiper('.slider-main', {

 // noSwiping: true,
  //noSwipingClass: 'swiper-no-swiping',
  effect: "fade",
  loop: true,
/*   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});
