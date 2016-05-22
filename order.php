<?php
	function validateEmail($email)
	{
	   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
	   return preg_match($pattern, $email);
	}
	if($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['form'] == 'pay' && $_GET['firstname'] && $_GET['lastname'] && $_GET['telephone'] && $_GET['email'] && $_GET['amount'] && $_GET['delivery'] && $_GET['address']) {
		$cost = 1600;
		//
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
		//
		if(isset($_GET['promo'])) {
			switch($_GET['promo']) {
				case "REDISH":
					$promo = "10%";
					$promocost = ($cost * $_GET['amount']) * (1-0.10);
					break;
				case "FACELAB":
				case "ORGANICMSK":
				case "NATURE":
				case "NAILLAB":
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
		}
		else
		{
			$promo = "отсутствует";
			$promocost = ($cost * $_GET['amount']);
		}
		//
		$subject = 'Ваш заказ на OrganicBrand.ru';
		$message = 'Ваш заказ принят на обработку. Наш менеджер свяжется с Вами в ближайшее время по указанному телефону: '.$_GET['telephone'].'.';
		$header = "From: Organic Brand <noreply@organicbrand.ru>\n";
		$header .="Reply-To: noreply@organicbrand.ru";
		//
		$manager = 'organicmsk@gmail.com';
		$manager_subject = "+1 новый заказ";
		$manager_message = "Поступил новый заказ.\r\n";
		$manager_message .= "Имя: ".$_GET['firstname']."\r\n";
		$manager_message .= "Фамилия: ".$_GET['lastname']."\r\n";
		$manager_message .= "Номер телефона: ".$_GET['telephone']."\r\n";
		$manager_message .= "Адрес электронной почты: ".$_GET['email']."\r\n";
		$manager_message .= "Количество: ".$_GET['amount']."\r\n";
		$manager_message .= "Тип доставки: ".$delivery."\r\n";
		$manager_message .= "Адрес: ".$_GET['address']."\r\n";
		$manager_message .= "Промо-код: ".$_GET['promo']."\r\n";
		$manager_message .= "Скидка: ".$promo."\r\n";
		$manager_message .= "К оплате: ".$promocost." ₽\r\n";
		$manager_header = "From: ".$_GET['firstname']." ".$_GET['lastname']." <".$_GET['email'].">\n";
		$manager_header .= "Reply-To: ".$_GET['email'];
		if(validateEmail($_GET['email'])) {
			if(mail($_GET['email'], $subject, $message, $header)) {
				echo "Send.<br>";
			}
			if(mail($manager, $manager_subject, $manager_message, $manager_header)) {
				echo "Send.<br>";
			}
		}
		else {
			echo "Access denied. Invalied E-mail.";
		}
	}
	else
	{
		echo "Access denied.";
	}
?>
