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

var trendSwiper = new Swiper(".trendSwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
});
