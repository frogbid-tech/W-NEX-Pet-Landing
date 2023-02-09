$(document).ready(function() {

	"use strict";

	$("#contactForm").validator().on("submit", function (event) {
		"use strict";

		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
			submitMSG(false, "Please Follow Error Messages and Complete as Required");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		"use strict";

		// Initiate Variables With Form Content
		var name = $("#name").val();
		var email = $("#email").val();
		var detail = $("#detail").val();

		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: "name=" + name + "&email=" + email + "&detail=" + detail,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		"use strict";

		$("#contactForm")[0].reset();
		submitMSG(true, "Thank you for your submission :)")
	}

	function formError(){
		"use strict";

		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		"use strict";

		if(valid){
			var msgClasses = "success form-message";
		} else {
			var msgClasses = "error form-message";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

	initbackTop();
	function initbackTop() {
		"use strict";
		
		var jQuerybackToTop = jQuery("#back-top");
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuerybackToTop.addClass('show');
			} else {
				jQuerybackToTop.removeClass('show');
			}
		});
		jQuerybackToTop.on('click', function(e) {
			jQuery("html, body").stop().animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		});
	}

	initStickyHeader();
	function initStickyHeader() {
		"use strict";

		var win = jQuery(window),
			stickyClass = 'sticky';

		jQuery('#header').each(function() {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 0;
			var flag = true;

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag){
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}
	initAddClass();
	function initAddClass() {
		"use strict";

		jQuery('.menu-opener, .menu-close').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});

		jQuery('.menu-opener2').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active2");
		});

		jQuery('.drop-link').on( "click", function(e){
			e.preventDefault();
			jQuery(this).toggleClass("active");
			jQuery('.drop-link').siblings(".drop").slideUp();
			jQuery(this).siblings(".drop").slideDown();
		});

		jQuery('.port-view .column').on( "mouseover", function(e){
			e.preventDefault();
			jQuery(".port-view .column").removeClass("active");
			jQuery(this).addClass("active");
		});
	}

	initSlickSlider();
	// Slick Slider init
	function initSlickSlider() {
		"use strict";

		jQuery('.fullscreen-slider').slick({
			speed: 800,
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
				breakpoint: 1199,
					settings: {
						slidesToShow: 2
					}
				},
				{
				breakpoint: 991,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		jQuery('.fullscreen-slider2').slick({
			speed: 800,
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 1,
			prevArrow: '.prev_them',
			nextArrow: '.next_them',
			adaptiveHeight: true
		});

		jQuery('.main-slider').slick({
			speed: 800,
			dots: true,
			arrows: false,
			infinite: true,
			vertical: true,
			slidesToShow: 1,
			adaptiveHeight: true
		});
	}

	initGoogleMap();
	// GoogleMap init
	function initGoogleMap() {
		"use strict";
		
		jQuery('.map').googleMapAPI({
			marker: 'images/maptip.png',
			mapInfoContent: '.map-info',
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			panControl: false,
			zoomControl: false
		});
	}

	initCounter();
	// Counter init
	function initCounter() {
		"use strict";

		jQuery('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}

	initLightbox();
	// modal popup init
	function initLightbox() {
		
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			padding: 0
		});
	}

	initTextRotator();
	// TextRotator2 init
	function initTextRotator() {
		jQuery("#rotating").typed({
			strings: ["Agency", "People", "Corporate", "Portfolio", "Company,"],
			loop: true,
			typeSpeed: 300
		});
	}

	initTextRotator2();
	// TextRotator2 init
	function initTextRotator2() {
		jQuery('#rotating2').textillate({
			selector: '.rotating-hold',

			// enable looping
			loop: true,

			// sets the minimum display time for each text before it is replaced
			minDisplayTime: 2000,

			// sets the initial delay before starting the animation
			// (note that depending on the in effect you may need to manually apply
			// visibility: hidden to the element before running this plugin)
			initialDelay: 0,

			// set whether or not to automatically start animating
			autoStart: true,

			// custom set of 'in' effects. This effects whether or not the
			// character is shown/hidden before or after an animation
			inEffects: [],

			// custom set of 'out' effects
			outEffects: [ 'hinge' ],

			// in animation settings
			in: {
				// set the effect name
				effect: 'fadeInLeftBig',

				// set the delay factor applied to each consecutive character
				delayScale: 1.5,

				// set the delay between each character
				delay: 50,

				// set to true to animate all the characters at the same time
				sync: false,

				// randomize the character sequence
				// (note that shuffle doesn't make sense with sync = true)
				shuffle: false,

				// reverse the character sequence
				// (note that reverse doesn't make sense with sync = true)
				reverse: false
			},
			out: {
				effect: 'hinge',
				delayScale: 1.5,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: false,
			},
			type: 'char'
		});
	}
}); 
$( window ).on( "load" , function() {

	"use strict";

	$( "#preloader" ).delay( 600 ).fadeOut( 300 );

	initIsoTop();
	// IsoTop init
	function initIsoTop() {

		"use strict";
		// Isotope init
		var isotopeHolder = jQuery('#isotop-holder'),
			win = jQuery(window);
		jQuery('.isotop-filter a').on( "click", function(e){
			e.preventDefault();
			
			jQuery('.isotop-filter li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			var selector = jQuery(this).attr('data-filter');
			isotopeHolder.isotope({ filter: selector });
		});
		jQuery('#isotop-holder').isotope({
			layoutMode: 'masonry',
			itemSelector: '.item',
			// percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});
		jQuery('#isotop-holder2').isotope({
			layoutMode: 'masonry',
			itemSelector: '.item',
			percentPosition: true,
			masonry: {
				columnWidth: '.item'
			}
		});
	}
});