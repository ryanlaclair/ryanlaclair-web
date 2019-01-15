$(document).ready(() => {
  $('#nav-responsive-button').on('click', (e) => {
    e.preventDefault();

    $('#nav-list-responsive').toggleClass('show');
  });
})