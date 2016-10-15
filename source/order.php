<?php
	function validateEmail($email)
	{
	   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
	   return preg_match($pattern, $email);
	}
	if($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['form'] == 'pay' && $_GET['firstname'] && $_GET['telephone'] && $_GET['email'] && $_GET['amount'] && $_GET['delivery'] && $_GET['address'] && $_GET['size']) {
		$cost = 1299;
		$size = "ProductSize[unknown]";

		$get_device = $_GET['device'];
		$get_deviceOS = $_GET['deviceos'];

		$get_size = $_GET['size'];

		if($get_size != "") {
			if($get_size == 110) {
				$cost = 699;
				$size = "110 г.";
			}
			elseif($get_size == 220) {
				$cost = 1299;
				$size = "220 г.";
			}
			else {
				$cost = 1299;
				$size = "ProductSize[".$get_size."]";
			}
		}
		else {
			$cost = 1299;
			$size = "не указан";
		}

		if($get_device == "mobile") {
			if($get_deviceOS == "ios") {
				$device = "iPhone";
				$deviceOS = "iOS";
			}
			elseif($get_deviceOS == "android") {
				$device = "Смартфон";
				$deviceOS = "Android";
			}
			elseif($get_deviceOS == "blackberry") {
				$device = "Смартфон";
				$deviceOS = "BlackBerry";
			}
			elseif($get_deviceOS == "windows") {
				$device = "Смартфон";
				$deviceOS = "Windows Phone";
			}
			else {
				$device = "Смартфон";
				$deviceOS = "не определена";
			}
			$deviceMessage = "Устройство: ".$device."\r\n";
			$deviceMessage .= "ОС: ".$deviceOS."\r\n";
		}
		elseif($get_device == "tablet") {
			if($get_deviceOS == "ios") {
				$device = "iPad";
				$deviceOS = "iOS";
			}
			elseif($get_deviceOS == "android") {
				$device = "Планшет";
				$deviceOS = "Android";
			}
			elseif($get_deviceOS == "blackberry") {
				$device = "Планшет";
				$deviceOS = "BlackBerry";
			}
			elseif($get_deviceOS == "windows") {
				$device = "Планшет";
				$deviceOS = "Windows Phone";
			}
			else {
				$device = "Планшет";
				$deviceOS = "не определена";
			}
			$deviceMessage = "Устройство: ".$device."\r\n";
			$deviceMessage .= "ОС: ".$deviceOS."\r\n";
		}
		elseif($get_device == "desktop") {
			$device = "Компьютер";
			$deviceMessage = "Устройство: ".$device."";
		}
		else {
			$deviceMessage = "Устройство не определено";
		}

		if($_GET['lastname'] != "") {
			$lastname = $_GET['lastname'];
		}
		else
		{
			$lastname = "не указана";
		}

		if($_GET['delivery'] == "courier") {
			$delivery = "Курьером";
		}
		elseif($_GET['delivery'] == "post")
		{
			$delivery = "Почтой";
		}
		else {
			$delivery = "Курьером";
		}

		if($_GET['promo'] != "") {
			switch($_GET['promo']) {
				case "REDISH":
					$promo = "10%";
					$promocost = ($cost * $_GET['amount']) * (1-0.10);
					break;
					case "FACELAB":
					case "ORGANICMSK":
					case "NATURE":
					case "NAILLAB":
					case "SKRASOTY":
					case "MANTRA":
					case "1106":
					case "EAWE":
					case "F-AVENUE":
					case "INMODO":
					case "MROSSO":
					case "KRASSULA":
					case "UGORIA":
					case "SKANNA":
					case "MOSKVICHKASALON":
					case "MBEAUTY":
					case "ANNA123":
					case "COSMETICN":
					case "ELENA-KOSMET":
					case "ANTONINA":
					case "AROMAMILA":
					case "SELA":
					case "ORG111":
					case "ORG112":
					case "ORG113":
					case "ORG114":
					case "ORG115":
					case "ORG116":
					case "ORG117":
					case "ORG118":
					case "ORG119":
					case "ORG121":
					$promo = "5%";
					$promocost = ($cost * $_GET['amount']) * (1-0.05);
					break;
				default:
					$promo = "отсутствует";
					$promocost = ($cost * $_GET['amount']);
					break;
			}

			$promocode = $_GET['promo'];
		}
		else
		{
			$promocode = "не указан";
			$promo = "отсутствует";
			$promocost = ($cost * $_GET['amount']);
		}

		$subject = 'Ваш заказ на OrganicBrand.ru';
		$message = 'Ваш заказ принят на обработку. Наш менеджер свяжется с Вами в ближайшее время по указанному телефону: +'.$_GET['telephone'].'.';
		$header = "From: Organic Brand <noreply@organicbrand.ru>\n";
		$header .="Reply-To: noreply@organicbrand.ru";

		$manager = 'store@organicbrand.ru';
		$manager_subject = "+1 новый заказ";
		$manager_message = "Поступил новый заказ.\r\n\r\n";
		$manager_message .= "Имя: ".$_GET['firstname']."\r\n";
		$manager_message .= "Фамилия: ".$lastname."\r\n";
		$manager_message .= "Номер телефона: +".$_GET['telephone']."\r\n";
		$manager_message .= "Адрес электронной почты: ".$_GET['email']."\r\n";
		$manager_message .= "Количество: ".$_GET['amount']."\r\n";
		$manager_message .= "Тип доставки: ".$delivery."\r\n";
		$manager_message .= "Адрес: ".$_GET['address']."\r\n";
		$manager_message .= "Размер: ".$size."\r\n";
		$manager_message .= "Промо-код: ".$promocode."\r\n";
		$manager_message .= "Скидка: ".$promo."\r\n";
		$manager_message .= "К оплате: ".$promocost." ₽\r\n";
		$manager_message .= "\r\n";
		$manager_message .= $deviceMessage;
		$manager_header = "From: Organic Brand <noreply@organicbrand.ru>\n";
		$manager_header .= "Reply-To: noreply@organicbrand.ru";
		if(validateEmail($_GET['email'])) {
			if(mail($_GET['email'], $subject, $message, $header)) {
				// return true;
			}
			if(mail($manager, $manager_subject, $manager_message, $manager_header)) {
				// return true;
				echo "Send.";
			}
		}
		else {
			echo "Invalid E-mail.";
		}
	}
	else
	{
		echo "Access denied.";
	}
?>
