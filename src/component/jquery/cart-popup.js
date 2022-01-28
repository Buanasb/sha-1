import $ from 'jquery';

$(document).ready(function () {
  $('.add-cart').hide();

  $('.add').click(function () {
    $('.add-cart').toggle();
  });
});
