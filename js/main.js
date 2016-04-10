$(window).load(function() {
	// $(".loading").fadeOut(500);
	// var lastScrollTop = 0;
	//
	// $(window).scroll(function(event) {
	// 	var st = $(this).scrollTop();
	// 	if (st > lastScrollTop){
	// 		//вниз
	// 		$(".page").css({"left":st});
	// 	}
	// 	else
	// 	{
	// 		// вверх
	// 	}
	// 	lastScrollTop = st;
	// });
	$("body").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 50);
		event.preventDefault();
	});

	$(".features").collapse({
		open: function() { this.slideDown(150); },
		close: function() { this.slideUp(150); },
		accordion: true
	});

	$(".card").flip({
		axis: "y",
		front: "auto",
		trigger: "hover"
	});

	// var feature = new jQueryCollapse($(".features"));
	// $("#f1").mouseenter(function(e) {
	// 	// e.preventDefault();
	// 	feature.open(1);
	// });
	// $("#f1").mouseleave(function(e) {
	// 	// e.preventDefault();
	// 	feature.close(1);
	// });
});
