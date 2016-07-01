/*
	DEVELOP TEAM:
		DESIGNED BY FAINA SAMAROVA (http://vk.com/id232842027 | faina.arsenovna@mail.ru);
		DEVELOPED BY TAMIK LOKYAEV (http://Tamik.ru/ | hello@Tamik.ru);

	MAIN APP FILE.
*/

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

	if(!device.mobile()) {
		setTimeout(function() {
			$("body").append('<script src="https://web.redhelper.ru/service/main.js?c=organicmsk" id="rhlpscrtg"></script>');
		}, 5000);
	}
});

$(document).ready(function() {
	if(!device.mobile()) {
		$("body").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 50);
			event.preventDefault();
		});

		$(".pattern").css({"height":$(window).height()});

		$(".viewctrl").spritespin({
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
				"/native/360/21.png",
				"/native/360/22.png",
				"/native/360/23.png",
				"/native/360/24.png",
				"/native/360/25.png",
				"/native/360/26.png",
				"/native/360/27.png",
				"/native/360/28.png",
				"/native/360/29.png",
				"/native/360/30.png",
				"/native/360/31.png",
				"/native/360/32.png",
				"/native/360/33.png"
			],
			width: 440,
			height: 780,
			animate: false,
			preloadCount: 33
		});

		if($(window).height() <= 860) {
			$(".viewctrl").spritespin({
				width: 360,
				height: 640
			});
		}
	}

	if(device.mobile()) {
		$(".loading").css({"display":"none"});

		$(".menu").collapse({
			open: function() { this.slideDown(150); },
			close: function() { this.slideUp(150); },
			accordion: true
		});

		var carousel = $("#mobileview").waterwheelCarousel({
			horizonOffset: 75,
			horizonOffsetMultiplier: .7,
			sizeMultiplier: 0.85,
			separation: 50,
			edgeFadeEnabled: true,
			clickedCenter: function() {
				carousel.next();
			}
		});
	}

	if(!device.mobile()) {
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
	}

	$("input").blur(function() {
		if($("input[name=firstname]").val() != "") {
			$("input[name=firstname]").css({"border-color": "#889d39"});
		}
		if ($("input[name=telephone]").val() != "") {
			$("input[name=telephone]").css({"border-color": "#889d39"});
		}
		if ($("input[name=email]").val() != "") {
			$("input[name=email]").css({"border-color": "#889d39"});
		}
		if ($("input[name=address]").val() != "") {
			$("input[name=address]").css({"border-color": "#889d39"});
		}
	});

	$("form[action=order]").submit(function(event) {
		if(($("input[name=form]").val() != "") && ($("input[name=firstname]").val() != "") && ($("input[name=telephone]").val() != "") && ($("input[name=email]").val() != "") && ($("input[name=amount]").val() != "") && ($("input[name=address]").val() != "") && ($("input[name=delivery]:checked").val() != "")) {
			event.preventDefault();
			$(".payform > .list > .form").html("<h1>Обработка.<small>Пожалуйста, подождите.</small></h1>");
			$(".payform > .list > .form").css({"display":"block"});
			$(".payform > .list > form").css({"display":"none"});
			pay();
		}
		else
		{
			event.preventDefault();
			if($("input[name=firstname]").val() == "") {
				$("input[name=firstname]").css({"border-color": "red"});
				$("input[name=firstname]").focus();
			}
			else if ($("input[name=telephone]").val() == "") {
				$("input[name=telephone]").css({"border-color": "red"});
				$("input[name=telephone]").focus();
			}
			else if ($("input[name=email]").val() == "") {
				$("input[name=email]").css({"border-color": "red"});
				$("input[name=email]").focus();
			}
			else if ($("input[name=address]").val() == "") {
				$("input[name=address]").css({"border-color": "red"});
				$("input[name=address]").focus();
			}
		}
	});

	$("input[name=telephone]").mask("+7 (999) 999-99-99", {placeholder: "+7 (___) ___-__-__"});

	$("input[name=promo]").keyup(function() {
		setTimeout(checkPromo, 250);
	});

	$("input[name=promo]").blur(function() {
		setTimeout(checkPromo, 250);
	});

	$("input[name=amount]").change(function() {
		var cost = (localStorage.getItem("cost") * $(this).val()) * (1 - localStorage.getItem("promocost"));
		$("#costValue").text(cost);
	});

	localStorage.setItem("ingredient", "naturalcoffee");
	localStorage.setItem("cost", 1600);
	localStorage.setItem("promocost", 0);
});

$(window).resize(function() {
	if(!device.mobile()) {
		$(".pattern").css({"height":$(window).height()});

		if($(window).height() <= 860) {
			$(".viewctrl").spritespin({
				width: 360,
				height: 640
			});
		}
	}
});

function showUpdate() {
	$(".update").css({"display":"block"});
	$.ajax({
		url: "changelog.html",
		type: "GET",
		error: function() {
			$("#changelog").html("Ошибка получения описания обновления.");
		},
		success: function(data) {
			$("#changelog").html(data);
		}
	});
}

function checkUpdate() {
	if(window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		showUpdate();
	}
}

function installUpdate() {
	window.applicationCache.swapCache();
	localStorage.setItem("version", "1.1");
	location.reload();
}

function openStore() {
	$(".loading").fadeOut(500);
}

function changeIngredient(value) {
	$(".ingredient").fadeOut(150);

	setTimeout(function() {
		if($(window).height() <= 860) {
			switch(value) {
				case "almondoil": $(".ingredient").css({"background-position":"0px 0px"})
				break;
				case "canesugar": $(".ingredient").css({"background-position":"0px -240px"})
				break;
				case "naturalcoffee": $(".ingredient").css({"background-position":"0px -480px"})
				break;
				case "orangeoil": $(".ingredient").css({"background-position":"0px -720px"})
				break;
				case "orangepeeloil": $(".ingredient").css({"background-position":"0px -960px"})
				break;
				case "seasalt": $(".ingredient").css({"background-position":"0px -1200px"})
				break;
				default: $(".ingredient").css({"background-position":"0px -480px"})
				break;
			}
		}
		else
		{
			switch(value) {
				case "almondoil": $(".ingredient").css({"background-position":"0px 0px"})
				break;
				case "canesugar": $(".ingredient").css({"background-position":"0px -300px"})
				break;
				case "naturalcoffee": $(".ingredient").css({"background-position":"0px -600px"})
				break;
				case "orangeoil": $(".ingredient").css({"background-position":"0px -900px"})
				break;
				case "orangepeeloil": $(".ingredient").css({"background-position":"0px -1200px"})
				break;
				case "seasalt": $(".ingredient").css({"background-position":"0px -1500px"})
				break;
				default: $(".ingredient").css({"background-position":"0px -600px"})
				break;
			}
		}
	}, 175);

	setTimeout(function() {
		$(".ingredient").fadeIn(150);
	}, 200);
}

function showIngredient(value) {
	var item = localStorage.getItem("ingredient");
	if(value != item) {
		changeIngredient(value);
		localStorage.setItem("ingredient", value);
	}
}

function showPayForm() {
	if(device.mobile() || device.tablet()) {
		window.location.href = '/order.html';
	}
	else
	{
		$(".page").css({"overflow":"hidden"});
		$(".payform > .fade").fadeIn(500);
		$(".payform > .list > .form").css({"display":"none"});
		$(".payform > .list").css({"bottom":"0px"});
		$(".payform > .list > form").css({"display":"block"});
		$("input[name=firstname]").focus();
	}
}

function closePayForm() {
	if(device.mobile() || device.tablet()) {
		window.location.href = '/';
	}
	else
	{
		$(".page").css({"overflow":"auto"});
		$(".payform > .fade").fadeOut(500);
		$(".payform > .list").css({"bottom":"-1000px"});
		setTimeout(function() {
			$(".payform > .list > .form").html("");
			$(".payform > .list > .form").css({"display":"none"});
			$(".payform > .list > form").css({"display":"block"});
		}, 500);
	}
}

function checkPromo() {
	$.ajax({
		url: "promo.php",
		type: "GET",
		data: "promo=true&code=" + $("input[name=promo]").val().toUpperCase(),
		success: function(data) {
			if(data == "true 5") {
				var promocost = (localStorage.getItem("cost") * $("input[name=amount]").val()) * (1 - localStorage.getItem("promocost"));
				$("#costValue").text(promocost);
				localStorage.setItem("promocost", 0.05);
			}
			else if(data == "true 10") {
				var promocost = (localStorage.getItem("cost") * $("input[name=amount]").val()) * (1 - localStorage.getItem("promocost"));
				$("#costValue").text(promocost);
				localStorage.setItem("promocost", 0.10);
			}
			else
			{
				var promocost = (localStorage.getItem("cost") * $("input[name=amount]").val()) * (1 - localStorage.getItem("promocost"));
				$("#costValue").text(promocost);
				localStorage.setItem("promocost", 0);
			}
		}
	});
}

function pay() {
	if(device.mobile()) {
		deviceData = "mobile";

		if(device.ios) {
			deviceOS = "ios";
		}
		else if(device.android) {
			deviceOS = "android";
		}
		else if(device.blackberry) {
			deviceOS = "blackberry";
		}
		else if(device.windows) {
			deviceOS = "windows";
		}
		else {
			deviceOS = "unknown";
		}
	}
	else if(device.tablet()) {
		deviceData = "tablet";

		if(device.ios) {
			deviceOS = "ios";
		}
		else if(device.android) {
			deviceOS = "android";
		}
		else if(device.blackberry) {
			deviceOS = "blackberry";
		}
		else if(device.windows) {
			deviceOS = "windows";
		}
		else {
			deviceOS = "unknown";
		}
	}
	else {
		deviceData = "desktop";
		deviceOS = "unknown";
	}

	$.ajax({
		url: "order.php",
		type: "GET",
		data: "form=" + $("input[name=form]").val() + "&device=" + deviceData + "&deviceos=" + deviceOS + "&firstname=" + $("input[name=firstname]").val() + "&lastname=" + $("input[name=lastname]").val() + "&telephone=" + $("input[name=telephone]").val() + "&email=" + $("input[name=email]").val() + "&amount=" + $("input[name=amount]").val() + "&address=" + $("input[name=address]").val() + "&delivery=" + $("input[name=delivery]:checked").val() + "&promo=" + $("input[name=promo]").val().toUpperCase(),
		error: function() {
			$(".payform > .list > .form").html("<h1>Произошла ошибка.<small>Попробуйте снова.</small><button type='button' onclick='showPayForm();'>Вернуться назад</button></h1>");
			$(".payform > .list > .form").css({"display":"block"});
			$(".payform > .list > form").css({"display":"none"});
		},
		success: function(data) {
			if(data == "Send.") {
				$(".payform > .list > .form").html("<h1>Ваш заказ принят.<small>Наш менеджер свяжется с Вами по указанному телефону.</small></h1>");
				$(".payform > .list > .form").css({"display":"block"});
				$(".payform > .list > form").css({"display":"none"});
			}
			else if (data == "Invalid E-mail.") {
				$(".payform > .list > .form").html("<h1>Некорректный E-Mail.<small>Проверьте правильность введеных данных.</small><button type='button' onclick='showPayForm();'>Вернуться назад</button></h1>");
				$(".payform > .list > .form").css({"display":"block"});
				$(".payform > .list > form").css({"display":"none"});
			}
			else {
				$(".payform > .list > .form").html("<h1>Произошла ошибка.<small>Проверьте правильность введеных данных.</small><button type='button' onclick='showPayForm();'>Вернуться назад</button></h1>");
				$(".payform > .list > .form").css({"display":"block"});
				$(".payform > .list > form").css({"display":"none"});
			}
		}
	});
}
