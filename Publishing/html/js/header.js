$(document).ready(function() {

    $('#btnOpen').on('click',function(){
        $('nav').stop().animate({"left":"0"});
        $('#searchInput').removeClass('on');
    });
    $('#btnClose').on('click',function(){
        $('nav').stop().animate({"left":"100%"});
    });

    $('#searchBox').on('click',function(){
        $('#searchInput').toggleClass('on');
    })

});
