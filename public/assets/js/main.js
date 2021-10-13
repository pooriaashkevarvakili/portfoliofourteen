//***********************************************
// Theme Name: Photography - Responsive Photography Template
// Author: Rumon078.
// Description: Photography Template.
// Version: 1.0
// Primary use: portfolio, agency, responsive, template, personal, photography, 					    photographer, photo blog, model portfolio, creative etc.
// Support: rumon078102@gmail.com;
//***********************************************


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		-----------------------
		Soooth Scroll
		-----------------------
		*/

		 $('a[href*=#]:not([href=#])').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if ($(window).width() < 768) {
                  if (target.length) {
                      $('html,body').animate({
                          scrollTop: target.offset().top - $('.navbar-header').outerHeight(true) + 1
                      }, 1000);
                      return false;
                  }
              } else {
                  if (target.length) {
                      $('html,body').animate({
                          scrollTop: target.offset().top - $('.navbar').outerHeight(true) + 1
                      }, 1000);
                      return false;
                  }
              }

          }
      });


		/* 
		-----------------------
		PrettyPhoto
		-----------------------
		*/

		$("a[rel^='prettyPhoto']").prettyPhoto();


		/* 
		-----------------------
		Banner Carousel
		-----------------------
		*/

		$('.banner-carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				1000: {
					items: 1,
					nav: false,
					loop: true
				}
			}
		})

		/* 
		-----------------------
		Testimonial Carousel
		-----------------------
		*/

		$('.testimonial-wrap').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true,
				},
				600: {
					items: 1,
					nav: true,
				},
				1000: {
					items: 1,
					nav: true,
					loop: true,
				}
			}
		})


		/* 
		-----------------------
		Client Carousel
		-----------------------
		*/

		$('.client-carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true,
				},
				600: {
					items: 3,
					nav: true,
				},
				1000: {
					items: 5,
					nav: true,
					loop: true,
				}
			}
		})
		
		/* 
		-----------------------
		Counter UP
		-----------------------
		*/

		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});

		
		
		/* 
		-----------------------
		Skill Animation
		-----------------------
		*/
		
		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.count-bar').animate({
					width:jQuery(this).attr('data-percent')
				},3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});

		/* 
		-----------------------
		Scroll Up
		-----------------------
		*/

		$('.top-arrow').on('click', function () {
			$('body').animate({
				scrollTop: 0
			}, 1000);
		});

		$('.top-arrow').hide();

		$(window).scroll(function () {

			if ($(window).scrollTop() > 250) {
				$('.top-arrow').fadeIn(500);
			} else {
				$('.top-arrow').fadeOut(500);

			}
		});



		/* 
		-----------------------
		Wow Js
		-----------------------
		*/

		new WOW().init();

        /* 
        -------------------------------------
        Disabled Inspect element For Brwoser
        ------------------------------------
        */
        

        $('body').bind('cut copy paste', function (e) {
            e.preventDefault();
        });
        
        $('body').on('contextmenu',function(){
            return false;
        });
        
        $('body').on('keydown' , function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v, Cltr+u will also be disabled sadly.
                return false;
            }
    
        });

	});
	
	//Preloader
	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({'overflow':'visible'});
	});

}(jQuery));