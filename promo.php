<?php
	if($_GET["promo"] == "true" && isset($_GET["code"])) {
		switch($_GET['code']) {
			case "REDISH":
				echo "true 10";
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
				echo "true 5";
				break;
			default:
				echo "Access denied.";
				break;
		}
	}
	else
	{
		echo "Access denied.";
	}
?>
