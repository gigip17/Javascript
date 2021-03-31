							/************
							*	NUMBER	*
							************/ 
// on ne peut pas mesurer la longueur d'un Nombre avec .length comme avec un String

		/********************************
		*	OPÉRATEURS MATHÉMATIQUES	*
		********************************/ 

//ADDITIONS
let w = 4;
w = w + 1;		// = 5
w += 5;			// = 10

//SOUSTRACTIONS
let x = 25;
x -= 5;		// = 10

//OPÉRATEUR D'INCRÉMENTATION
// Augmente ou diminue de 1 la valeur de la variable.
a++		//renvoie la valeur avant l'incrémentation
a--		//=> return then increment
++a		//renvoie la valeur après l'incrémentation
--a		//=> increment then return

//MULTIPLICATION ET DIVISIONS
x *= 2;		// = 10
x /= 4;		// = 10

//MODULO
//=> récupère le reste entier d'une division
x = 10%3 = 1
// 10/3 = 3, reste 1


garder un nombre entier
Math.trunc() retourne la troncature entière d'un nombre en retirant sa partie décimale.

Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.

Garder un nombre avec x derrière la virgule
toFixed()

		/****************************************
		*	TRANSFORMER UN STRING EN NOMBRE		*
		****************************************/
		
parseInt() 			//convertit la chaîne en entier.
parseFloat()		// convertit la chaîne en nombre réel.

var chaine = "182.23";
var nb=parseInt(chaine); 	// nb vaut alors 182
var nb2=parseFloat(chaine); // nb2 vaut alors 182.23
--
Number 			//Constructeur d'objets numériques. On peut donc utiliser Number(valeur) pour retourner un nombre à partir d'une valeur.
var txt="12.99";
console.log(txt);
console.log(Number(txt));
--
"15" * 1		//multiplie par 1 pour transformer en nombre
var nb = "15"	//String
nb = "15"*1		//Number

-- Arrondir

//List of MATH's Methods:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

