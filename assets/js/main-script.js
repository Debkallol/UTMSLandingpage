(function ($) {
    "use strict";

    $(window).load(function(){

        $('#loading').fadeOut(1500);
        $('#into-logo').addClass('animated fadeInDown');
        $('#into-btn').addClass('animated zoomIn');

    });

    $(document).ready(function() {

        /* Scrolling Smoothly
         * ----------------------------------------------------------------------------------------*/
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });

        /*$(window).scroll(function(){
            $("#nav").toggleclass('scrolled', $(this).scrollTop()>50);
        })*/
        

        $(function () {
            $.scrollUp({
              scrollName: 'scrollUp', // Element ID
              topDistance: '5000', // Distance from top before showing element (px)
              topSpeed: 300, // Speed back to top (ms)
              animation: 'fade', // Fade, slide, none
              animationInSpeed: 200, // Animation in speed (ms)
              animationOutSpeed: 200, // Animation out speed (ms)
              scrollText: '', // Text for element
              activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            })
          })



        $(document).ready(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if(scroll>790){
                    $("#nav").css("background", "white");

                    $("#nav").addClass("socialnew li a i");
                    $("#nav_content").addClass("navbar-navi li a ");
                }
                else{
                    $("#nav").css("background","rgba(115, 115, 115, .6)");

                    $("#nav").removeClass("socialnew li a i");
                   $("#nav_content").removeClass("navbar-navi li a");
                }
            
            })
        })
          

       
       
        /*SIDE NAV
         * ----------------------------------------------------------------------------------------*/
        $("#nav-btn").on('click', function() {
            $("#side-nav").animate({right: 0}, 'medium');
            $("#side-nav-mask").addClass('visible');
        });
        $("#side-nav-mask").on('click', function() {
            $("#side-nav").animate({right: -250}, 'medium');
            $("#side-nav-mask").removeClass('visible');
        });

        /*Parallax
         * ----------------------------------------------------------------------------------------*/
        $(window).stellar({
            horizontalScrolling: false
        });

        /*Type Effect
         * ----------------------------------------------------------------------------------------*/
        var typist;
        typist = document.querySelector("#typist-element");
        new Typist(typist, {
            letterInterval: 60,
            textInterval: 5000
        });

        /*SERVICES
         * ----------------------------------------------------------------------------------------*/
        
        $(".single-service").hover(function(){
            $('.ic', this)
                .removeClass('animated rubberBand')
                .hide()
                .addClass('animated rubberBand')
                .show();
        });

        /*Products
         * ----------------------------------------------------------------------------------------*/
        $(".single-product").hover(function(){
            $('.product-overlay', this)
                .addClass('animated fadeIn visible')
                .show();
        });

        $(".single-product").mouseleave(function(){
            $('.product-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });

        /*Swiper
         * ----------------------------------------------------------------------------------------*/
        var teamSwiper = new Swiper ('#team-slider', {
            slidesPerView: 1,
            loop: true,
            direction: 'horizontal',
            effect: "slide",
            speed: 1000,
            autoplay: 5000,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: true,
        });

    });

})(jQuery);
