$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
        spaceBetween : 30, // 슬라이드간 간격
        slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
        centeredSlides: true //카드슬라이드옵션
        }
    });
});