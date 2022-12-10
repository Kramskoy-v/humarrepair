import { Swiper } from "swiper/bundle";

// Инициализация слайдеров

const newSwiper = new Swiper('.slider-main', {

  effect: "fade",
  loop: true,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
