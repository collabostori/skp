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

    $('.sub-visual-tab-item').find('.sub-visual-tab-link').addClass('off');

    $(this).find('.sub-visual-tab-link').removeClass('off').addClass('on');

  });

  $('.sub-visual-tab-item').on('mouseleave', function(){

    $('.sub-visual-tab-item').find('.sub-visual-tab-link').removeClass('off');

    $(this).find('.sub-visual-tab-link').removeClass('on');

  });

  /**
   * faq
   */

  $('.faq-list-item-question').data('open', 'false').on('click', function(){
    if($(this).data('open') === 'false'){
      $('.faq-list-item-question').data('open', 'false').removeClass('open').next().removeClass('open');
      $(this).addClass('open').next().addClass('open');
      $(this).data('open', 'true');
    } else {
      $(this).removeClass('open').next().removeClass('open');
      $(this).data('open', 'false');
    }
  });

});




