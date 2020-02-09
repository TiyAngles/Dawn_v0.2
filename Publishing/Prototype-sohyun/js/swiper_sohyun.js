$(document).ready(function() {
  var bannerSlide = new Swiper(".banner-slide", {
    loop: true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
    speed: 2000, // 슬라이드 속도 설정--> 지정하지 않을시 기본값은 300
    autoHeight: true, // 자동높이 사용여부 : 사용하지 않을시 기본값은 false
    autoplay: {
      // 자동 재생
      delay: 1000 // 딜레이
    },
    navigation: {
      nextEl: ".swiper-button-next", // 다음 버튼 클래스명
      prevEl: ".swiper-button-prev" // 이전 버튼 클래스명
    },
    pagination: {
      // 페이징 설정
      el: ".swiper-pagination",
      clickable: true // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    }
  });
  var hpSlide = new Swiper(".hp-slide", {
    slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
    centeredSlides: 0 //카드슬라이드옵션
  });
});
