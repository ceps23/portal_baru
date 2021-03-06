jQuery(document).ready(function() {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
      $("ul#ticker01").liScroll();  
	 
      $('.owl-carousel').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }]
    });
      
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});



    // slick slider call
wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

<!-- Preloader -->
jQuery(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(700).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(700).css({
        'overflow': 'visible'
    });
})

