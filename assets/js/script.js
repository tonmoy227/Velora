/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: 1, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});



	$('.marquee-right').marquee({
		gap: 0,
		speed: 30,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});


	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.vl-scrollup').fadeIn();
		} else {
			$('.vl-scrollup').fadeOut();
		}
	});
	$('.vl-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){



			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".vl_hero_title").length) {
					var AGTTitleAni = $(".vl_hero_title");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .03,
							rotationX: 15,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}

				const VLHero = gsap.timeline();
				VLHero
				.from(".vl-hero-img img", { scale: 1.3,  duration: 1, transformOrigin: "left",  ease: "power1.out" })
				.from(".vl-hero-text .item-icon-rate i img", { scale: 0,  duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .5")
				.from(".vl-hero-text .item-icon-rate i", { scaleX: 0,  x: 100, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .5")
				.from(".vl-hero-text .vl-btn", {  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .5")


			}, 700);
		})		
	});
	

	if ($('.vl-testi-slider').length > 0 ) {
		var slider = new Swiper('.vl-testi-slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			effect: "fade",
			pagination: {
				el: ".vl-testi-pagi",
				clickable: true,
			},
			speed: 1000,
		});
	}; 


	if ($(".vl-anenities-item-wrap").length) {

		document.querySelectorAll(".vl-anenities-item-wrap").forEach((itemWrap) => {

			const innerArea = itemWrap.querySelector(".vl-anenities-item");
			const image = itemWrap.querySelector(".item-img");

			gsap.set(image, {
				xPercent: -50,
				yPercent: -50,
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none"
			});

			innerArea.addEventListener("mousemove", (e) => {
				const rect = innerArea.getBoundingClientRect();

				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				gsap.to(image, {
					x: x,
					y: y,
					duration: 0.4,
					ease: "power3.out"
				});
			});

			innerArea.addEventListener("mouseenter", () => {
				gsap.to(image, { opacity: 1, scale: 1, duration: 0.3 });
			});

			innerArea.addEventListener("mouseleave", () => {
				gsap.to(image, { opacity: 0, scale: 0.8, duration: 0.3 });
			});

		});

	}

	$('.counter').counterUp({
		delay: 50,
		time: 5000
	});


	if($('.nx-itm-title').length) {
		var txtheading = $(".nx-itm-title");
		if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			if( $(el).hasClass('nx-itm-anim') ){
				gsap.set(el.split.chars, {
					opacity: .2,
					color: "#000000",
					y: "-3",
				});
			}
			if( $(el).hasClass('nx-itm-anim2') ){
				gsap.set(el.split.chars, {
					opacity: .2,
					color: "#fff",
					y: "-3",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					end: "top 40%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				color: "inherit",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});

		});
	}

	if($('.tx-split-text').length) {
		var st = jQuery(".tx-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });
			if( jQuery(el).hasClass('split-in-up') ){
				gsap.set(el.split.lines, {
					opacity: 0,
					y: 50,
					rotateX: "50deg",
					ease: "back.out",
					transformOrigin: "50% 0%"
				});
			}
			el.anim = gsap.to(el.split.lines, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				yPercent: 0,
				rotationX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: .5, 
				stagger: 0.3,
			});
		});
	};



	if (window.matchMedia("(min-width: 1200px)").matches) {
		var collab3 = gsap.timeline({
			scrollTrigger: {
				trigger: ".vl-about-content",
				start: "top 70%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},
		})
		collab3
		.from(".vl-ab-line span", {
			height: 0,
			ease: "elastic.out(1,0.5)",
			duration: 2,
		})
	}



	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var TVABT = gsap.timeline({
			scrollTrigger: {
				trigger: '.vl-about-logo',
				start: "top 80%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		TVABT
		.from(".vl-about-logo .vl-ab-logo", { opacity: 0, rotate:'0deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" })
	};


	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -10,
			ease: "none",
		}).to(image, {
			yPercent: 10,
			ease: "none",
		}); 
	});

	var AXC = gsap.timeline({
		scrollTrigger: {
			trigger: ".vl-about-card",
			start: "top 30%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC
	.from(".vl-about-card .item-client .client-avtr li", {
		yPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})


	var AXC2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".vl-feat1-sec",
			start: "top 60%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC2
	.from(".vl-feat1-title", {
		yPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})




})(jQuery);