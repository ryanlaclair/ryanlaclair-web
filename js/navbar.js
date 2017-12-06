const headerScroll = 300;
const navScroll = 350;

$(document).ready(() => {
    $(window).on("scroll touchmove", () => {
        $("nav").toggleClass("nav-bar-collapsed", $(document).scrollTop() > 0);
    
        $("#header-img").css("opacity", 1 - $(document).scrollTop() / headerScroll);
        $("#nav-img-home").css("opacity", $(document).scrollTop() / navScroll);
    });
});