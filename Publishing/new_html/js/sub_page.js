$(document).ready(function(){

    // myprofile
    $('.sub-page-list .tab-list li').on('click',function(e){
        e.preventDefault();
        var i = $(this).index();

        // tab-list 
        $('.sub-page-list .tab-list li').children('a').removeClass('on');
        $('.sub-page-list .tab-list li').eq(i).children('a').addClass('on');

        // tab-content
        $('.tab-content>div').removeClass('on');
        $('.tab-content>div').eq(i).addClass('on');
    });

    //위소현
    var swiper = new Swiper(".swiper-container.reco-slide", {
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

    //곽민상
    var swiper = new Swiper('.sub-page-detail-head .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    //곽민상
    var swiper = new Swiper('.sub-page-detail-head-origin .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});
