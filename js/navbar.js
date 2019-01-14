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

    $('nav').toggleClass('nav-bar-dark');
    $('#nav-list-responsive').toggleClass('show');

    // if ($('#nav-list-responsive').css('display') == 'none') {
    //   $('#nav-list-responsive').css({
    //     'display': 'flex',
    //     'flex-direction': 'column',
    //     'align-items': 'flex-end'
    //   });
    //   $('#nav-bar').css('background', 'rgba(37, 89, 75, 0.95)');
    // }
    // else {
    //   $('#nav-list-responsive').css('display', 'none');
    //   $('#nav-bar').css('background', 'none');
    // }
  });
})