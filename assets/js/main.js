// Sticky Navber
window.addEventListener('scroll', function () {
    let header = document.getElementById('header')
    header.classList.toggle('sticky', window.scrollY > 300)
});

// Testimonial Slider Init
$('.testimonial_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});


jQuery(document).ready(function () {

    // Toggle Menu
    jQuery('.menu_bars').click(function () {
        jQuery('.menu_wrapper').toggleClass('active')
        jQuery('.nav_overlay').toggleClass('active')
        jQuery(this).toggleClass('active')
    })

    function toggleMenu() {
        jQuery('.menu_wrapper').removeClass('active');
        jQuery('.nav_overlay').removeClass('active');
        jQuery('.menu_bars').removeClass('active');
        jQuery('li.has_dropdown ul').height(0)
    }

    jQuery('.nav_overlay').click(function () {
        toggleMenu()
    });

    jQuery('.close_menu').click(function () {
        toggleMenu()
    });

    jQuery('.menu_wrapper li a').click(function () {
        toggleMenu()
    });


    // Accordion Dropdown Menu
    jQuery("li.menu_item.has_dropdown").click(function () {
        jQuery(this).toggleClass("active");
    });
    jQuery(function () {
        var animateTime = 300,
            navLink = $('li.menu_item.has_dropdown');
        navLink.click(function () {
            var nav = jQuery(this).children("ul");
            if (nav.height() === 0) {
                autoHeightAnimate(nav, animateTime);
            } else {
                nav.stop().animate({ height: '0' }, animateTime);
            }
        });
    })
    /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
        var curHeight = element.height(), // Get Default Height
            autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }





    //   Back to top
    var offset = 500;
    var duration = 100;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.to_top').fadeIn(duration);
        } else {
            jQuery('.to_top').fadeOut(duration);
        }
    });

    jQuery('.to_top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});
