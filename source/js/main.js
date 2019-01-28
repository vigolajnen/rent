"use strict";

// слайдеры на главной
$(document).ready(function () {

  $("#slider-popular-goods").slick({
    arrow: true,
      infinite: true,
      autoplay: false,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: '40px',
      prevArrow: $('.popular-goods__btn-prev'),
      nextArrow: $('.popular-goods__btn-next'),
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrow: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
  })

  $("#slider-new-goods").slick({
    arrow: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '40px',
    prevArrow: $('.new-goods__btn-prev'),
    nextArrow: $('.new-goods__btn-next'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrow: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })

  $("#slider-looked").slick({
    arrow: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '40px',
    prevArrow: $('.slider-product__btn-prev'),
    nextArrow: $('.slider-product__btn-next'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrow: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  })

  $("#slider-recommend").slick({
    arrow: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '40px',
    prevArrow: $('.slider-product__btn-prev'),
    nextArrow: $('.slider-product__btn-next'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrow: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  })

  $("#slider-brands").slick({
    arrow: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: '40px',
    prevArrow: $('.brands__btn-prev'),
    nextArrow: $('.brands__btn-next'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrow: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $("#slider-reviews").slick({
    arrow: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $('.reviews__btn-prev'),
    nextArrow: $('.reviews__btn-next'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $("#slider-promo").slick({
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    slidesToShow: 1,
    prevArrow: $('.promo__slider__btn-prev'),
    nextArrow: $('.promo__slider__btn-next'),
    responsive: [
    {
      breakpoint: 600,
      settings: {
        arrow: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrow: false
      }
    }
    ]
  })

  $(".js-slider-news").slick({
    responsive: [{
      breakpoint: 99999,
      settings: "unslick"
    }, {
      breakpoint: 480,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  })

    $(".js-slider-blog").slick({
      responsive: [{
        breakpoint: 99999,
        settings: "unslick"
      }, {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    })

});

(function () {
  $("#tabs-links>li>a").click(function () {
    $("#tabs-links>li>a").removeClass("tabs__active");
    $(this).addClass("tabs__active");
    $("#tabs-container>div").hide();
    var t_content = $(this).attr("href");
    $(t_content).show();
    return false;
  });
  $("#tabs-links>.tabs__item:first-child a").trigger("click");
})();


$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();

    // $('.popup__wrapper').toggle('fadeOutDown');
    $.magnificPopup.close();
  });
});


$(document).ready(function () {
  $(".vp-invisible").viewportChecker({
    classToAdd: "visible"
  })
});

$(function () {
  $('.scrollbar').jScrollPane();
});
