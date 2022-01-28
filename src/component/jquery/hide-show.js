import $ from 'jquery';

$(document).ready(function () {
  $('.popup').hide();

  $('.address').click(function () {
    $('.popup').toggle();
  });
});

$(document).ready(function () {
  $('#icon-close').click(function () {
    $('.popup').hide();
  });
});
