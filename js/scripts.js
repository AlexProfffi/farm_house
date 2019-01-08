
(function($, undefined) {
	$(function() {

		/*================== RESET ==================*/

		$.browser = {};
		$.browser.ie = /(MSIE |Trident.*rv[ :])([0-9]+)/.test(navigator.userAgent);
		$.browser.firefox = /Firefox/.test(navigator.userAgent);
		$.browser.opera = /OPR/.test(navigator.userAgent);
		if (!($.browser.opera)) $.browser.chrome = /Chrome/.test(navigator.userAgent);
		
		if ($.browser.chrome || $.browser.opera || $.browser.ie) {
    		$('body').css('-webkit-text-stroke', '1px rgba(0,0,0,0.1)');
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

  		$('a').focus(function() {
  			$(this).attr('hideFocus', 'hidefocus');
  		});


  		/*================== NAVBAR ==================*/
		
		var navbarPosition = $('.navbar__position');
		var scrollBool = true;
		var windowBrowser = $(window);

		windowBrowser.scroll(function () {

			if (windowBrowser.scrollTop() > 0 && scrollBool) {

				navbarPosition.addClass("navbar__position_scroll");
				scrollBool = false;
			} 

			if (windowBrowser.scrollTop() == 0 && !scrollBool) {

				navbarPosition.removeClass("navbar__position_scroll");
				scrollBool = true;
			}
			
			/*
			var navbar__position = $('.navbar__position');
			var navbar__searchForm = $('.navbar__search-form');
			var searchLoupe = $('.search-loupe');
			var scrollBool = true;
			var windowBrowser = $(window);
			
			windowBrowser.scroll(function () {

				if (windowBrowser.scrollTop() > 0 && scrollBool) {

					navbar__position.addClass("navbar__position_scroll");
				
					setTimeout(function () {
						navbar__searchForm.css('top', '80px');
					}, 500);

					searchLoupe.removeClass('search_open');
					scrollBool = false;
				} 

				if (windowBrowser.scrollTop() == 0 && !scrollBool) {

					navbar__position.removeClass("navbar__position_scroll");

					setTimeout(function () {
						navbar__searchForm.css('top', '100px');
					}, 500);

					searchLoupe.removeClass('search_open');
					scrollBool = true;
				}
			}*/
		});
		

		/*================== TOGGLER ==================*/

		/*$('.toggler').click(function() {
			$(this).toggleClass('toggler_open');
		});*/


		/*================== SEARCH ==================*/

		$('.search-loupe').click(function() {
			$(this).toggleClass('search_open');
			$('.search-form').toggleClass('search_open');
		});	


		/*var searchForm__input = $(".search-form__input");	
		var valueSearch = searchForm__input.attr('value');

		searchForm__input.focus(function() {
			if(this.value == valueSearch) this.value = "";
		});

		searchForm__input.blur(function() {
			if(this.value == "") this.value = valueSearch;
		});*/
		
	});
})(jQuery);