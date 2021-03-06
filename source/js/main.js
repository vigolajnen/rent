"use strict";

$(document).ready(function () {
  $(".vp-invisible").viewportChecker({
    classToAdd: "visible"
  })
});


$(".section-scroll").onepage_scroll({
  sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000, // AnimationTime let you define how long each section takes to animate
  pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function (index) {
    var $currentSection = $('.onepage-wrapper section:nth-child(' + index + ')');
    $currentSection.find('.advantages__item').addClass('adv-animation');
    $currentSection.find('.advantages__item:nth-child(3)').addClass('advBlock3-animation');

    $currentSection.find('.feedback').addClass('left-animation');
    $currentSection.find('.feedback__item').addClass('itemBlock');
    $currentSection.find('.feedback__caption').addClass('itemBlock');
    $currentSection.find('.slider-task__item.slick-slide').addClass('right-animation');
    $currentSection.find('.section__box.box').addClass('itemBlock');


  }, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function (index) {

  }, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: 1140, // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"
});

// слайдеры на главной
$(document).ready(function () {
  $("#slider-task").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.slider-task__button-prev'),
    nextArrow: $('.slider-task__button-next'),
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  var lastNumber = document.querySelector('.slick-dots').childElementCount;
  document.querySelector('.pagination__item:last-child').innerHTML = lastNumber;

  $("#slider-task").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
    document.querySelector('.pagination__item:first-child').innerHTML = nextSlide + 1;
  });
  
});


$('.scroll-feedback').on('click', function () {
  
  $('html,body').animate({
    scrollTop: $(".section-scroll").moveTo(3)
  }, {
    duration: 1E3
  });
});

if (screen.width < 1140) {
  $('.scroll-feedback').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.feedback').offset().top + "px"
    }, {
      duration: 1E3
    });
  });
}



