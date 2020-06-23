$(function() {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead',

    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [{
            breakpoint: 961,
            settings: "unslick"
        }, ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        focusOnSelect: true,
        centerMode: true,
        responsive: [{
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1106,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        centerMode: true,
        responsive: [{
                breakpoint: 1210,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1106,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    })

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    })

    // calc
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // calculation summ on sleep in hotel 
    $('.quantity-button').on('click', function() {
        var parents = $(this).parents('.holder-slider__info');
        let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
        $('.summ', parents).html('$' + summ);
    });


    // здесь рассчитывает сумму с исходными значениями !
    $('.quantity').each(function() {
        var parents = $(this).parents('.holder-slider__info');
        let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
        $('.summ', parents).html('$' + summ);
    });

    // shop-section
    // transform + in -
    $('.surfboard-box__circle').on('click', function() {
        $(this).toggleClass('active')
    });

    // burger menu show/hide

    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
    })


    // wow.js

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();

});