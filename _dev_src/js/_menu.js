$(function(){

  /**
   * gnb PC
   */

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