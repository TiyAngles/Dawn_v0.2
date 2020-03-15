$(document).ready(function(){

    // myprofile
    $('.myprofile-list .tab-list li').on('click',function(e){
        e.preventDefault();
        var i = $(this).index();

        // tab-list 
        $('.myprofile-list .tab-list li').children('a').removeClass('on');
        $('.myprofile-list .tab-list li').eq(i).children('a').addClass('on');

        // tab-content
        $('.tab-content>div').removeClass('on');
        $('.tab-content>div').eq(i).addClass('on');
    });
});
