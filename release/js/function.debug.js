$(function(){

  /**
   * selectric
   */

  $('.select-01').selectric();

  /**
   * List Board Item Cover Action
   */

  $('.board-item-01').on('mouseenter', function(){
    $('.board-item-01-cover').removeClass('on');
    $(this).find('.board-item-01-cover').addClass('on');
  });

  $('.board-item-01').on('mouseleave', function(){
    $(this).find('.board-item-01-cover').removeClass('on');
  });

});



