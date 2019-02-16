
(function($, undefined) {
	$(function() {


		/*================== DOCUMENT ==================*/

		//cross-browser
		$.browser = {};
		$.browser.ie = /(MSIE |Trident.*rv[ :])([0-9]+)/.test(navigator.userAgent);
		$.browser.firefox = /Firefox/.test(navigator.userAgent);
		$.browser.opera = /OPR/.test(navigator.userAgent);
		if (!($.browser.opera)) $.browser.chrome = /Chrome/.test(navigator.userAgent);
		
		if ($.browser.chrome || $.browser.opera || $.browser.ie) {
    		$('body').css('-webkit-text-stroke', '1px rgba(0,0,0,0.1)');
    		$('input').css('-webkit-text-stroke', 0);
  		}

  		var svgClass = $('svg[class]');

  		if ($.browser.firefox) {
  			svgClass.parent().css('transform', 'translateY(0)').css('font-size', '15.4px');
  		}

  		if ($.browser.ie) {
  			
	  		svgClass.css('margin-top', '+=1px').css('margin-right', '+=0.1px');

	  		if (svgClass.parent().css('position') == 'static') svgClass.parent().css('position', 'relative');

	  		svgClass.parent().css('bottom', '+=1px').css('font-size', '17px');
  		}

  		// nav mobile
  		$(document).click(function(e) {

			if( toggler.hasClass('toggler_open') ) {

				if( !$(e.target).closest(".nav").length ) {
					toggler.removeClass('toggler_open');
				}

			}

		});
		

		/*================== TOGGLER ==================*/

		var toggler = $('.toggler');
		var searchLoupe = $('.search-loupe');

		toggler.click(function(e) {

			e.stopPropagation();

			if( searchLoupe.hasClass('search_open') ) {
				searchLoupe.removeClass('search_open');
				$('.search-form').removeClass('search_open');
			}

			$(this).toggleClass('toggler_open');

		});


		/*================== SEARCH ==================*/

		searchLoupe.click(function(e) {

			e.stopPropagation();

			if( toggler.hasClass('toggler_open') ) {
				toggler.removeClass('toggler_open');
			}

			$(this).toggleClass('search_open');
			$('.search-form').toggleClass('search_open');
		});	


		/*================== SLIDER ==================*/

		$('.slider').slick({
			infinite: true,
			speed: 100,
			fade: true,
			cssEase: 'linear'
		});


		/*================== TOURCH DEVICE ==================*/

	    if('ontouchstart' in window || navigator.msMaxTouchPoints) {
	        for(var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
	            
	            var sheet = document.styleSheets[sheetI];

	            if(sheet.cssRules) {
	                for(var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
	                    
	                    var rule = sheet.cssRules[ruleI];
	                    
	                    if(rule.selectorText) {
	                        rule.selectorText = rule.selectorText.replace(":hover", ":active");
	                    }
	                }
	            }
	        }
	    }





		
	});
})(jQuery);
