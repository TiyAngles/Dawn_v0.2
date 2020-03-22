$(document).ready(function () {
    $(".find-tab ul li").eq(0).click(function () {
        $(this).find("a").addClass("on");
        $(".find-tab ul li").eq(1).find("a").removeClass("on");
        $(".forget-id").show();
        $(".forget-pw").removeClass("on");
    });
    $(".find-tab ul li").eq(1).click(function () {
        $(this).find("a").addClass("on");
        $(".find-tab ul li").eq(0).find("a").removeClass("on");
        $(".forget-pw").addClass("on");
        $(".forget-id").hide();
    });
});