function init(){

  // main section 01
  // $('.main-section-01 .main-section-title-type-01').css({
  //   position: 'relative',
  //   top: '50px',
  //   opacity:0
  // });
  //
  // $('.main-section-01 .main-section-paragraph-type-01').eq(0).css({
  //   position: 'relative',
  //   top: '50px',
  //   opacity:0
  // });
  //
  // $('.main-section-01 .main-section-paragraph-type-01').eq(1).css({
  //   position: 'relative',
  //   top: '50px',
  //   opacity:0
  // });

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