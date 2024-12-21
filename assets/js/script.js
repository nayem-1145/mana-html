(function ($) {

    /*
        1. Header Sticky
        2. Hero Slider
        3. Scroll top button
        4. Wow Js
        5. Preloader
    */

    //1. Header Sticky
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();

        if (scrollBar > 100) {
            $(".header-sticky").addClass("sticky-on");
        } else {
            $(".header-sticky").removeClass("sticky-on");
        }
    });

    //2. Hero Slider 
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        
        speed: 700,
        prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    });

    //3. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });

    //4. Wow Js
    new WOW().init();



})(jQuery)








