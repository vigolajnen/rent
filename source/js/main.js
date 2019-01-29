"use strict";

$(document).ready(function () {
  $(".vp-invisible").viewportChecker({
    classToAdd: "visible"
  })
});


// $('#slider-task').slick({
// customPaging: function (slider, i) {
//   return i + 1;
// },
// dots: true,
// appendDots: $('.slider-task .slider-task__buttons .party-news-dots,
//   .party.news - slider - btns2.party - news - dots '),
// });

// слайдеры на главной
// $(document).ready(function () {
//   $("#slider-task").slick({
//     arrow: true,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     adaptiveHeight: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: $('.slider-task__button-prev'),
//     nextArrow: $('.slider-task__button-next'),
//     responsive: [{
//         breakpoint: 600,
//         settings: {
//           arrow: false
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrow: false
//         }
//       }
//     ]
//   })
// });