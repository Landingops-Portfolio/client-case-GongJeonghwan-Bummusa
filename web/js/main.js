$(document).ready(function() {
    var swiper = new Swiper(".mvSwiper", {
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var swiper_2 = new Swiper(".reviewSwiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 2, 
            }
        },
    });

    AOS.init();

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // 1300px 아래로 스크롤되면
        if (scrollDistance >= 1300) {
            // #header에 on 클래스 추가
            $('#header').addClass('on');
        } else {
            // #header에 on 클래스 제거
            $('#header').removeClass('on');
        }

        // 3200px 아래로 스크롤되면
        if (scrollDistance >= 3200) {
            // #header에 on 클래스 제거
            $('#header').removeClass('on');
        }
    });

    $('#navOn').click(function(){
        $('.side_menu').css({'left' : '0', 'opacity' : '1'});
        $('#body').css('overflow', 'hidden');
    });

    $('#navCan').click(function(){
        $('.side_menu').css({'left' : '-100%', 'opacity' : '0'});
        $('#body').css('overflow-y', 'auto');
    });

    $('.side_menu nav ul li a').click(function(){
        $('.side_menu').css({'left' : '-100%', 'opacity' : '0'});
        $('#body').css('overflow-y', 'auto');
    });

    
});

