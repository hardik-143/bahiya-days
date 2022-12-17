$(document).ready(function () {
  console.log("ready!");
  $(document).on("click", ".menu_icon", function () {
    $(".top_bar").toggleClass("top_bar_hover");
    $(".middel_bar").toggleClass("middel_bar_hover");
    $(".bottom_bar").toggleClass("bottom_bar_hover");
    $('.navbar-collapse').slideToggle()
  });
});
