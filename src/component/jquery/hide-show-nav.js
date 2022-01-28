import $ from 'jquery';

var zero = 0;
$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.button-card').toggleClass('hide', $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
});
