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

  /**
   * visual tab
   */

  $('.sub-visual-tab-item').on('mouseenter', function(){

    $(this).find('.sub-visual-tab-link').addClass('on');

  });

  $('.sub-visual-tab-item').on('mouseleave', function(){

    $(this).find('.sub-visual-tab-link').removeClass('on');

  });

  /**
   * faq
   */

  $('.faq-list-item-question').data('open', 'false').on('click', function(){
    if($(this).data('open') === 'false'){
      $('.faq-list-item-question').data('open', 'false').next().removeClass('open');
      $(this).next().addClass('open');
      $(this).data('open', 'true');
    } else {
      $(this).next().removeClass('open');
      $(this).data('open', 'false');
    }
  });

});




