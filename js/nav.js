$(window).on("scroll touchmove", function () {
    $("nav").toggleClass("nav-bar-collapsed", $(document).scrollTop() > 0);
});