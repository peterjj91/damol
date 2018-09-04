
// main select js
$(document).ready(function() {
    $('select').selectpicker();
});

// sidr menu
$(document).ready(function() {
    $('#right-menu').sidr({
        name: 'sidr-left',
        side: 'left',
        source: '#header-nav',
        onOpen: function() {
            $('.mobile-menu').addClass('active');
        },
        onClose: function() {
            $('.mobile-menu').removeClass('active');
        }
    });
});

$(document).mouseup(function (e){
    var container = $("#sidr-left");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $.sidr('close', 'sidr-left');
    }
});

// anchor link
$('.anchor-scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// slider promo-item--product
$('.promo-slider').slick({
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    dots: false,
    draggable: false,
    speed: 200,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
                draggable: true,
                touchMove: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                focusOnSelect: true
            }
        }
    ]
});

// product slider
$('.product-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    fade: true,
    speed: 300,
    lazyLoad: 'ondemand',
    asNavFor: '.product-nav',
    prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
    nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>'
});

$('.product-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    asNavFor: '.product-for',
    dots: false,
    // centerMode: true,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
    nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {

            }
        }
    ]
});

// slider company
$('.slider-company').slick({
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    dots: false,
    speed: 200,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

// datepicker
$(document).ready(function() {
    $('.calendar-item').datepicker({
        language: 'ru',
        format: 'MM',
        minViewMode: 'days',
        maxViewMode: 'days',
        startView: 'days',
        daysOfWeekHighlighted: [0,6]
    });
});
