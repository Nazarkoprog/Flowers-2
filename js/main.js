const flowerSlider = new Swiper('.flowers-slider', {
  // Параметри слайдера
  loop: true,
  slidesPerView	: 6,

 
  // Подключаем стрелк
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметри слайдера
  loop: true,
  slidesPerView	: 1,

 
  // Подключаем стрелк
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
AOS.init();