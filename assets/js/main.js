
jQuery(function ($) {
    'use strict';

    // Preloader
    jQuery(window).on('load', function () {
        jQuery("#loading").fadeOut(500);
    });

    // banner area slider
    $('.banner-active').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // favourite area slider`
    $('.our-favourites').owlCarousel({
        loop: true,
        nav: false,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4
            }
        }
    })

    // review area slider
    $('.customer-actives').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    	// //slicknav js
	$(document).ready(function() {
		$('.slick_nav_menu').slicknav( {
			'label': '', brand: '<a href="index.html"> Cafe </a>'
		}
		);
	}
	);
    // Gallery
    $('.popup-img').magnificPopup({
        type: 'image',
        removalDelay: 300,
        gallery: {
            enabled: true
        },
    });

    // Masonary JS
    var macy = Macy({
        container: '#masonary',
        trueOrder: false,
        waitForImages: false,
        margin: 0,
        columns: 4,
        breakAt: {
            1200: 4,
            940: 4,
            520: 2,
            400: 1
        }
    });



}(jQuery));