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





function init(){

  // main section 01
  $('.main-section-01 .main-section-title-type-01').css({
    position: 'relative',
    top: '50px',
    opacity:0
  });

  $('.main-section-01 .main-section-paragraph-type-01').eq(0).css({
    position: 'relative',
    top: '50px',
    opacity:0
  });

  $('.main-section-01 .main-section-paragraph-type-01').eq(1).css({
    position: 'relative',
    top: '50px',
    opacity:0
  });

  // main section 02
  $('.main-section-02 .main-section-title-type-02').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  $('.main-section-02 .main-section-paragraph-type-02').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  $('.main-section-02 .main-section-more-wrap').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  $('.main-section-02 .main-section-list').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  // main section 03
  $('.main-section-03 .main-section-title-type-02').css({
    position: 'relative',
    left: '-50px',
    opacity:0
  });

  $('.main-section-03 .main-section-paragraph-type-02').css({
    position: 'relative',
    left: '-50px',
    opacity:0
  });

  $('.main-section-03 .main-section-more-wrap').css({
    position: 'relative',
    left: '-50px',
    opacity:0
  });

  $('.main-section-03 .main-section-list').css({
    position: 'relative',
    left: '-50px',
    opacity:0
  });

  // main section 04
  $('.main-section-04 .main-section-title-type-02').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  $('.main-section-04 .main-section-paragraph-type-02').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  $('.main-section-04 .main-section-more-wrap').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });

  $('.main-section-04 .main-section-list').css({
    position: 'relative',
    left: '50px',
    opacity:0
  });


}

$(function(){

  init();

  $(window).on('scroll', function(){

    if( ( $(window).scrollTop() + $(window).height() ) > $('.main-section-01').offset().top + 100 ){

      $('.main-section-01 .main-section-title-type-01').animate({
        top: '0',
        opacity:1
      });

      $('.main-section-01 .main-section-paragraph-type-01').eq(0).delay(300).animate({
        top: '0',
        opacity:1
      });

      $('.main-section-01 .main-section-paragraph-type-01').eq(1).delay(600).animate({
        top: '0',
        opacity:1
      });

    }

    if( ( $(window).scrollTop() + $(window).height() ) > $('.main-section-02').offset().top + 100 ){

      $('.main-section-02 .main-section-title-type-02').delay(0).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-02 .main-section-paragraph-type-02').delay(300).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-02 .main-section-more-wrap').delay(600).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-02 .main-section-list').delay(900).animate({
        left: '0',
        opacity:1
      });

      setTimeout(function(){
        $('.main-section-02 .main-section-inner-top').removeClass('hide');
      }, 1200);

    }

    if( ( $(window).scrollTop() + $(window).height() ) > $('.main-section-03').offset().top + 100 ){

      $('.main-section-03 .main-section-title-type-02').delay(0).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-03 .main-section-paragraph-type-02').delay(300).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-03 .main-section-more-wrap').delay(600).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-03 .main-section-list').delay(900).animate({
        left: '0',
        opacity:1
      });

      setTimeout(function(){
        $('.main-section-03 .main-section-inner-top').removeClass('hide');
      }, 1200);

    }

    if( ( $(window).scrollTop() + $(window).height() ) > $('.main-section-04').offset().top + 100 ){

      $('.main-section-04 .main-section-title-type-02').delay(0).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-04 .main-section-paragraph-type-02').delay(300).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-04 .main-section-more-wrap').delay(600).animate({
        left: '0',
        opacity:1
      });

      $('.main-section-04 .main-section-list').delay(900).animate({
        left: '0',
        opacity:1
      });

      setTimeout(function(){
        $('.main-section-04 .main-section-inner-top').removeClass('hide');
      }, 1200);

    }

  });

});
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