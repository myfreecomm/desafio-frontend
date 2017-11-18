$(document).ready(function () {
    
    offset = $('.theme-features').offset().top;

    $(document).scroll(function () {
        if ((offset - 200) <= $(window).scrollTop()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
});