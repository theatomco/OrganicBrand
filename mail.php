<?php
	// header('charset: UTF-8');
	// global $firstname = $_GET['firstname'];
	// global $lastname $_GET['lastname'];
	// global $telephone = trim($_GET['telephone']);
	// global $email = $_GET['email'];
	// global $amount = $_GET['amount'];
	// global $deliverytype = $_GET['delivery'];
	// global $address = $_GET['address'];
	//
	// function sendMail($to) {
	// 	// no reply
	// 	$header = "From: Organic Brand <noreply@organicbrand.ru>\r\n";
	// 	$header .= "X-Mailer: PHP/".phpversion();
	// 	$subject = "Заказ Organic Brand";
	// 	$message = "message";
	// 	mail($to, $subject, $message, $header);
	// 	// to manager
	// 	$m_subject = "+1 оформленный заказ";
	// 	$data_message = "data message.\n";
	// 	$data_message .= "Имя:".$firstname."\n";
	// 	$data_message .= "Фамилия:".$lastname."\n";
	// 	$data_message .= "Номер телефона:".$telephone."\n";
	// 	$data_message .= "Адрес электронной почты:".$email."\n";
	// 	$data_message .= "Количество:".$amount."\n";
	// 	$data_message .= "Тип доставки:".$deliverytype."\n";
	// 	$data_message .= "Адрес:".$address."\n";
	// 	mail("corp@Tamik.ru", $m_subject, $data_message, $header);
	// }
	// sendMail($email);

	// function validateEmail($email) {
	// 	$pattern = "/^[0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z]*\.)+[a-z]{2,6})$/i";
	// 	return preg_match($pattern, $email);
	// }

	if($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['form'] == 'pay') {
		// if(validateEmail($_GET['email'])) {
			$to = 'corp@Tamik.ru';
			$from = $_GET['email'];
			$firstname = $_GET['firstname'];
			$lastname = $_GET['lastname'];
			$telephone = trim($_GET['telephone']);
			$amount = $_GET['amount'];
			$delivery = $_GET['delivery'];
			$address = $_GET['address'];
			$subject = 'Ваш заказ на OrganicBrand.ru';
			$m_subject = '+1 заказ';
			$message = 'Ваш заказ принят на обработку. Наш менеджер свяжется с Вами в ближайшее время по указанному телефону: '.$telephone.'.\n';
			$m_message = "data message.\n";
			$m_message .= "Имя:".$firstname."\n";
			$m_message .= "Фамилия:".$lastname."\n";
			$m_message .= "Номер телефона:".$telephone."\n";
			$m_message .= "Адрес электронной почты:".$from."\n";
			$m_message .= "Количество:".$amount."\n";
			$m_message .= "Тип доставки:".$delivery."\n";
			$m_message .= "Адрес:".$address."\n";
			$header = "From: Organic Brand <noreply@organicbrand.ru>\n";
			// $header = "Reply-To: ".$email;
			$m_header = "From: ".$firstname." ".$lastname." <".$from.">\n";
			$m_header .= "Reply-To: ".$from;
			// to user
			// mail($from, $subject, $message, $header);
			// to manager
			// mail($to, $m_subject, $m_message, $m_header);
			if(mail($from, $subject, $message, $header)) {
				echo "send to user<br>";
			}
			if(mail($to, $m_subject, $m_message, $m_header)) {
				echo "send to manager<br>";
			}
			mail("hello@Tamik.ru", "OrganicBrand Mailer unit-test", "Text message.");
		// }
		// else
		// {
		// 	echo "Указан неверный адрес электронной почты";
		// }
	}
	else
	{
		echo "Access denied.";
	}
?>
