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

<<<<<<< HEAD
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

=======
>>>>>>> 25a6c49099a72970e01c042816145e5956b27074
});



<<<<<<< HEAD


$(function(){

  /**
   * gnb PC
   */

  $('.gnb-depth1-link').on('mouseenter', function(){
    $('.header').addClass('open');
  });

  $('.gnb').on('mouseleave', function(){
    $('.header').removeClass('open');
  });

  /**
   * gnb Mobile
   */

  $('.btn-mobile-gnb').data('open', 'false').on('click', function(){

    if( $(this).data('open') === 'false' ){
      $('html').addClass('gnb-open');
      $('body').addClass('gnb-open');
      $('.header').addClass('open');
      $(this).addClass('open');
      $(this).data('open', 'true');
    } else {
      $('html').removeClass('gnb-open');
      $('body').removeClass('gnb-open');
      $('.header').removeClass('open');
      $(this).removeClass('open');
      $(this).data('open', 'false');
    }

  });

  $('.gnb-depth1-link').data('open', 'false').on('click', function(){

    if( $(this).data('open') === 'false' ){
      $('.gnb-depth1-link').removeClass('open').next().removeClass('open');
      $(this).addClass('open').next().addClass('open');

      $('.gnb-depth1-link').data('open', 'false');
      $(this).data('open', 'true');
    } else {
      $(this).removeClass('open').next().removeClass('open');
      $(this).data('open', 'false')
    }

  });

  $('.tnb-current').data('open', 'false').on('click', function(){

    if( $(this).data('open') === 'false' ){
      $(this).addClass('open').next().addClass('open');
      $(this).data('open', 'true');
    } else {
      $(this).removeClass('open').next().removeClass('open');
      $(this).data('open', 'false');
    }

  });

});
=======
>>>>>>> 25a6c49099a72970e01c042816145e5956b27074
