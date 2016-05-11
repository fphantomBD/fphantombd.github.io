$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

(function ($) {
	
	/*============== JS FILE ACTIVE ===============*/
	/*-----------------------------------------
	[1. jQuery Mobilemenu ]
	[2. Bootstrap Tabs ]
	[3. ScrollUp ]
	[4. Google Map ]
	--------------------------------------------*/
	/*---------------------
	 [1. jQuery Mobilemenu ]
	--------------------- */
		jQuery('nav#dropdown').meanmenu();
		
	/*---------------------
	[2. Bootstrap Tabs ]
	--------------------- */
	$('#myTabs a').on('click',function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	/*-------------------
	[3. ScrollUp ]
	---------------------*/
	$.scrollUp({
		animation: 'slide', // Fade, slide, none
		scrollSpeed: 800,
		scrollText: [
		  "<i class='fa fa-chevron-up'></i>"
		]
	});
    
	
})(jQuery);
