
	$('.advisorimages ul li img').popover({
		placement: 'bottom',
		animation: false}
	);
		
	// anchor scrolling
	var didScroll = true;

	var sections = $(".wrapper").each(function(index) {
		$(this).data("height", $(this).height());
	});
	var links = $(".subnav a");

	$(".subnav").localScroll({
		axis : "y",
		duration : 1000,
		easing : "easeInOutExpo",
		hash : true
	});
		
		
	if(window.location.hash == '#application'){
		show_application();
	}
	
		


});;
