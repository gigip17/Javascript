		<!---------------------------
		-	 Conditions - SWITCH	-
		---------------------------->

// "http://localhost:8081/2.2-Condition-switch.php"

age = 27;

// Switch =

switch (age){
	case 12:
		console.log("salut gamin!");
		break;
	case 18:
		console.log("salut jeune homme!");
		break;
	case 26:
		console.log("Tu as l'âge parfait!");
		break;
	case 30:
		console.log("salut vielle branche!");
		break;
};

// Switch Lesser or Greater

switch (true){
	case (age <= 12):
		console.log("salut gamin!");
		break;
	case (age <= 18):
		console.log("salut jeune homme!");
		break;
	case (age == 26):
		console.log("Tu as l'âge parfait!");
		break;
	case (age >= 27):
		console.log("salut vielle branche!");
		break;
};
?>
