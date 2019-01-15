$(document).ready(() => {
  const headerScroll = 300;
  const navScroll = 350;

  $(window).on('scroll touchmove', () => {
    $('#nav-bar').toggleClass('nav-bar-collapsed', $(document).scrollTop() > 0);

    $('#header-img').css('opacity', 1 - $(document).scrollTop() / headerScroll);
    $('#nav-img-home').css('opacity', $(document).scrollTop() / navScroll);
  });

  $('#nav-responsive-button').on('click', (e) => {
    e.preventDefault();

    $('#nav-list-responsive').toggleClass('show');
  });
})