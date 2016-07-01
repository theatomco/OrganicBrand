/*
	DEVELOP TEAM:
		DESIGNED BY FAINA SAMAROVA (http://vk.com/id232842027 | faina.arsenovna@mail.ru);
		DEVELOPED BY TAMIK LOKYAEV (http://Tamik.ru/ | hello@Tamik.ru);

	MAIN APP/ORDER FILE.
*/

$(document).ready(function() {
	if(device.ios() && device.mobile()) {
		$("#costValue").css({"right":"30px","margin-top":"-35px"});
	}

	if(device.ios() && device.tablet()) {
		$("#costValue").css({"right":"30px","margin-top":"-35px"});
	}

	$("input[name=firstname]").watermark("Иван");
	$("input[name=lastname]").watermark("Иванов");
	$("input[name=telephone]").watermark("+7 (900) 000-00-00");
	$("input[name=email]").watermark("store@organicbrand.ru");
	$("input[name=address]").watermark("г. Москва, Кутузовский пр. 5, индекс 100001");
	$("input[name=promo]").watermark("Промо-код");

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

	localStorage.setItem("cost", 1600);
	localStorage.setItem("promocost", 0);
});

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
