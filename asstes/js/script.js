// Banner Slide
var swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Trending swiper
var trendSwiper = new Swiper(".trendSwiper", {
  slidesPerView: 4.25,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// Deals swiper
var trendSwiper = new Swiper(".dealsSwiper", {
  slidesPerView: 3.45,
  spaceBetween: 70,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// offers swiper
// var mySwiper = new Swiper(".offersSwiper", {
//   spaceBetween: 40,
//   slidesPerView: 2.2,
//   centeredSlides: true,
//   roundLengths: true,
//   loop: true,
//   loopAdditionalSlides: 40,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// Customer swiper
var swiper = new Swiper(".customerSwiper", {
  slidesPerView: 2,
  spaceBetween: 62,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
