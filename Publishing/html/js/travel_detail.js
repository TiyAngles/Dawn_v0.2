$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      // 페이징 설정
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
