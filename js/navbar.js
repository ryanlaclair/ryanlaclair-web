$(document).ready(() => {
  const headerScroll = 300;
  const navScroll = 350;

  $(window).on('scroll touchmove', () => {
    $('nav').toggleClass('nav-bar-collapsed', $(document).scrollTop() > 0);

    $('#header-img').css('opacity', 1 - $(document).scrollTop() / headerScroll);
    $('#nav-img-home').css('opacity', $(document).scrollTop() / navScroll);
  });

  $('#nav-responsive-button').on('click', (e) => {
    e.preventDefault();

    if ($('#nav-list').css('display') == 'none') {
      $('#nav-list').css('display', 'flex');
    }
    else {
      $('#nav-list').css('display', 'none');
    }
  });
})