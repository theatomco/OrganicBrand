$(window).load(function() {
	setTimeout(checkUpdate, 500);

	setTimeout(function() {
		$(".loading-text").fadeOut(500);
	}, 1000);

	setTimeout(function() {
		$(".logo").css({"margin-top":"-100px"});
	}, 1500);

	setTimeout(function() {
		$(".description").css({"opacity":"1","margin-top":"-75px"});
	}, 2000);

	setTimeout(function() {
		$(".enter").css({"opacity":"1","margin-top":"25px"});
	}, 3000);
});

$(document).ready(function() {
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

	$(".pattern").css({"height":$(window).height()});

	$(".product").spritespin({
		source: [
			"/native/360/1.png",
			"/native/360/2.png"
			// "/native/360/3.png",
			// "/native/360/4.png",
			// "/native/360/5.png",
			// "/native/360/6.png",
			// "/native/360/7.png",
			// "/native/360/8.png",
			// "/native/360/9.png",
			// "/native/360/10.png",
			// "/native/360/11.png",
			// "/native/360/12.png",
			// "/native/360/13.png",
			// "/native/360/14.png",
			// "/native/360/15.png",
			// "/native/360/16.png",
			// "/native/360/17.png",
			// "/native/360/18.png",
			// "/native/360/19.png",
			// "/native/360/20.png",
			// "/native/360/21.png",
			// "/native/360/22.png",
			// "/native/360/23.png",
			// "/native/360/24.png",
			// "/native/360/25.png",
			// "/native/360/26.png",
			// "/native/360/27.png",
			// "/native/360/28.png",
			// "/native/360/29.png",
			// "/native/360/30.png",
			// "/native/360/31.png",
			// "/native/360/32.png",
			// "/native/360/33.png",
			// "/native/360/34.png",
			// "/native/360/35.png"
		],
		width: 400,
		height: 700,
		animate: false,
		wrap: false
	});

	localStorage.setItem("ingridient", "naturalcoffee");
});

function showUpdate() {
	$(".update").css({"display":"block"});
	$(".update > .object").css({"display":"block"});
}

function checkUpdate() {
	if(window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		showUpdate();
	}
}

function installUpdate() {
	window.applicationCache.swapCache();
	localStorage.setItem("version", "0.9b11");
	location.reload();
}

// function checkConnect() {
// 	var connect = false;
// 	if(connect == false) {
// 		$(".payform > .list > .form").html("<h1>Здесь будет форма для оплаты.<small>А может и нет.</small></h1>");
// 	}
// 	console.log(connect);
// }

function openStore() {
	$(".loading").fadeOut(500);
}

function changeIngridient(value) {
	$(".ingridient").fadeOut(150);

	setTimeout(function() {
		$(".ingridient").css({"background-image":"url(/native/ingridients/" + value + ".png)"});
	}, 175);

	setTimeout(function() {
		$(".ingridient").fadeIn(150);
	}, 200);
}

function showIngridient(value) {
	var item = localStorage.getItem("ingridient");
	if(value != item) {
		changeIngridient(value);
		localStorage.setItem("ingridient", value);
	}
}

function showPayForm() {
	$(".payform > .fade").fadeIn(500);
	$(".payform > .list").css({"bottom":"0px"});
}

function closePayForm() {
	$(".payform > .fade").fadeOut(500);
	$(".payform > .list").css({"bottom":"-1000px"});
}

// setInterval(checkUpdate, 5000);
setInterval(checkConnect, 10000);
