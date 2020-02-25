$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, // 슬라이드간 간격
    centeredSlides: true, //카드슬라이드옵션
    pagination: {
      // 페이징 설정
      el: ".swiper-pagination",
      clickable: true // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    }
  });
});
