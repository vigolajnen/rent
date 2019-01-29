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
  beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"
});

$(window).resize(function () {
  if (document.body.offsetWidth > 769) {
    
  }
});


(function ($) {
  var input = $('input');
  var feedbackCaption = $('.feedback__caption');
  var feedbackText = $('.feedback__item');
  var feedback = $('#feedback');
  var form = $('form');

  TweenLite.from(input, 1, {autoAlpha: 0});
  TweenLite.from(feedbackCaption, 2, {autoAlpha: 0});
  TweenLite.from(feedbackText, 2, {autoAlpha: 0, delay: 1});

  TweenLite.from(feedback, 1, {
    x: 200,
    ease:Power1.easeOut
  });

  // TweenLite.from(form, 1, {
  //   x: 400,
  //   ease: Power1.easeOut
  // });
  
})(jQuery);

// плавный скролл

// $(document).ready(function(){
//     $("#feedback").on("click", function(e){
//         var anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $(anchor.attr('href')).offset().top
//         }, 777);
//         e.preventDefault();
//         return false;
//     });
// });

// $('#slider-task').slick({
// customPaging: function (slider, i) {
//   return i + 1;
// },
// dots: true,
// appendDots: $('.slider-task .slider-task__buttons .party-news-dots,
//   .party.news - slider - btns2.party - news - dots '),
// });

// слайдеры на главной
$(document).ready(function () {
  $("#slider-task").slick({
infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.slider-task__button-prev'),
  nextArrow: $('.slider-task__button-next'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  })
});