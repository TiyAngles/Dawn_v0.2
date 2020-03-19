$(document).ready(function () {
    $(".find-tab ul li").eq(0).click(function () {
        $(".forget-id").show();
        $(".forget-pw").removeClass("on");
    });
    $(".find-tab ul li").eq(1).click(function () {
        $(".forget-pw").addClass("on");
        $(".forget-id").hide();
    });
});