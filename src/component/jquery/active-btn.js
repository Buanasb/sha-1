import $ from 'jquery';

//activate color button
$(document).on('click', 'button', function () {
  $(this).addClass('act').siblings().removeClass('act');
});
