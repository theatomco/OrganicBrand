<?php
	if($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['form'] == 'pay') {
		$delivery = $_GET['delivery'];
		//
		if($delivery == "courier") {
			$delivery = "Курьером";
		}
		elseif($delivery == "post")
		{
			$delivery = "Почтой";
		}
		else {
			$delivery = "Курьером";
		}
		//
		$subject = 'Ваш заказ на OrganicBrand.ru';
		$message = 'Ваш заказ принят на обработку. Наш менеджер свяжется с Вами в ближайшее время по указанному телефону: '.$_GET['telephone'].'.';
		$header = "From: Organic Brand <noreply@organicbrand.ru>\n";
		$header .="Reply-To: noreply@organicbrand.ru";
		//
		$manager = 'organicmsk@gmail.com';
		$manager_subject = '+1 новый заказ';
		$manager_message = "Поступил новый заказ.\r\n";
		$manager_message .= "Имя: ".$_GET['firstname']."\r\n";
		$manager_message .= "Фамилия: ".$_GET['lastname']."\r\n";
		$manager_message .= "Номер телефона: ".$_GET['telephone']."\r\n";
		$manager_message .= "Адрес электронной почты: ".$_GET['email']."\r\n";
		$manager_message .= "Количество: ".$_GET['amount']."\r\n";
		$manager_message .= "Тип доставки: ".$delivery."\r\n";
		$manager_message .= "Адрес: ".$_GET['address']."\r\n";
		$manager_header = "From: ".$_GET['firstname']." ".$_GET['lastname']." <".$_GET['email'].">\n";
		$manager_header .= "Reply-To: ".$_GET['email'];
		if(mail($_GET['email'], $subject, $message, $header)) {
			echo "Send.<br>";
		}
		if(mail($manager, $manager_subject, $manager_message, $manager_header)) {
			echo "Send.<br>";
		}
	}
	else
	{
		echo "Access denied.";
	}
?>
