$(document).ready(function () {
  $(".alert-btn button")
    .eq(0)
    .on("click", function () {
      $(".login-error").addClass("on");
    });
  $(".alert-btn button")
    .eq(1)
    .on("click", function () {
      $(".login-success").addClass("on");
    });
  $(".alert-btn button")
    .eq(2)
    .on("click", function () {
      $(".signin-error").addClass("on");
    });
  $(".alert-btn button")
    .eq(3)
    .on("click", function () {
      $(".signin-success").addClass("on");
    });
  $(".alert-btn button")
    .eq(4)
    .on("click", function () {
      $(".account-delete-alert").addClass("on");
    });
  $(".alert-btn button")
    .eq(5)
    .on("click", function () {
      $(".user-service").addClass("on");
    });

  $("#close").on("click", function () {
    $(".alert-container").removeClass("on");
  });
  $(".alert-container").on("click", function () {
    $(this).removeClass("on");
  });
});
