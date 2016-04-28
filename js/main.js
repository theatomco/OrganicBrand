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

	var debug = '<div class="debug"></div>';
	$("body").append(debug);
	$(".debug").css({"display":"block", "position":"fixed", "top":"25px","left":"25px", "z-index":1000, "background-color":"white", "padding":"15px", "box-shadow":"0px 0px 25px black"});
	$(".debug").html($(window).width() + "x" + $(window).height());
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
			"/native/360/2.png",
			"/native/360/3.png",
			"/native/360/4.png",
			"/native/360/5.png",
			"/native/360/6.png",
			"/native/360/7.png",
			"/native/360/8.png",
			"/native/360/9.png",
			"/native/360/10.png",
			"/native/360/11.png",
			"/native/360/12.png",
			"/native/360/13.png",
			"/native/360/14.png",
			"/native/360/15.png",
			"/native/360/16.png",
			"/native/360/17.png",
			"/native/360/18.png",
			"/native/360/19.png",
			"/native/360/20.png",
			"/native/360/21.png"
		],
		width: 400,
		height: 700,
		animate: false,
		preloadCount: 21
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
	localStorage.setItem("version", "0.9b26");
	location.reload();
}

function openStore() {
	$(".loading").fadeOut(500);
}

function changeIngridient(value) {
	$(".ingridient").fadeOut(150);

	setTimeout(function() {
		switch(value) {
			case "almondoil": $(".ingridient").css({"background-position":"0px 0px"})
			break;
			case "canesugar": $(".ingridient").css({"background-position":"0px -300px"})
			break;
			case "naturalcoffee": $(".ingridient").css({"background-position":"0px -600px"})
			break;
			case "orangeoil": $(".ingridient").css({"background-position":"0px -900px"})
			break;
			case "orangepeeloil": $(".ingridient").css({"background-position":"0px -1200px"})
			break;
			case "seasalt": $(".ingridient").css({"background-position":"0px -1500px"})
			break;
			default: $(".ingridient").css({"background-position":"0px -600px"})
			break;
		}
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

	$.ajax({
		url: "payform.html",
		cache: false,
		error: function() {
			$(".payform > .list > .form").html("<h1>Невозможно связаться с сервером.<small>Проверьте подключение.</small></h1>");
		},
		success: function(data) {
			$(".payform > .list > form").html(data);
		}
	});
}

function closePayForm() {
	$(".payform > .fade").fadeOut(500);
	$(".payform > .list").css({"bottom":"-1000px"});
}

function pay() {
	$.ajax({
		url: "mail.php",
		type: "GET",
		data: "form=" + $("input[name=form]").val() + "&firstname=" + $("input[name=firstname]").val() + "&lastname=" + $("input[name=lastname]").val() + "&telephone=" + $("input[name=telephone]").val() + "&email=" + $("input[name=email]").val() + "&amount=" + $("input[name=amount]").val() + "&address=" + $("input[name=address]").val() + "&delivery=" + $("input[name=delivery]").val(),
		error: function() {
			alert("ошибка\n");
		},
		success: function(data) {
			alert("оплачено\n" + data);
		}
	});
	var data = "form=" + $("input[name=form]").val() + "&firstname=" + $("input[name=firstname]").val() + "&lastname=" + $("input[name=lastname]").val() + "&telephone=" + $("input[name=telephone]").val() + "&email=" + $("input[name=email]").val() + "&amount=" + $("input[name=amount]").val() + "&address=" + $("input[name=address]").val() + "&delivery=" + $("input[name=delivery]").val();
	console.log(data);
}
