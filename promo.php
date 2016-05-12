<?php
	if($_GET["promo"] == "true" && isset($_GET["code"])) {
		switch($_GET["code"]) {
			case "FACELAB":
				echo "true 5";
				break;
			case "ORGANICMSK":
				echo "true 5";
				break;
			case "NATURE":
				echo "true 5";
				break;
			case "REDISH":
				echo "true 10";
				break;
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
				echo "error";
				break;
		}
	}
	else
	{
		echo "Access denied.";
	}
?>
