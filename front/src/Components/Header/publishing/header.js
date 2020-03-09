$(document).ready(function() {

    $('#btnOpen').on('click',function(){
        $('nav').stop().animate({"left":"0"});
        $('#searchInput').removeClass('on');
    });
    $('#btnClose').on('click',function(){
        $('nav').stop().animate({"left":"100%"});
    });

    $('.gnb-list').on('click',function(){
        $(this).children('.open-menu').slideToggle();
    });
    $('.open-menu>li').on('click',function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    $('#searchBox').on('click',function(){
        $('#searchInput').toggleClass('on');
    })

    $('#rnb li').on('click',function(){
        $(this).children('a').toggleClass('on');
        $(this).siblings().children('a').removeClass('on');
    });

});
